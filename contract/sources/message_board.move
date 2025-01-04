module LendSphere::LoanSystem {

    use std::vector;
    use std::string;
    use std::signer;
    use std::event;
    use std::errors;

    // Define errors
    const USER_NOT_REGISTERED: u64 = 1;
    const NOT_AUTHORIZED: u64 = 2;

    // Structs
    struct User has key, store {
        address: address,
    }

    struct Admin has key, store {
        address: address,
    }

    struct Application has key, store {
        id: u64,
        user_address: address,
        amount: u64,
        interest: u64,
        reason: string,
        money_collection_period: u64,
        loan_period: u64,
        status: string,
    }

    struct Bond has key, store {
        id: u64,
        user_address: address,
        amount: u64,
        investors: vector<address>,
        start_date: u64,
        stop_date: u64,
        interest: u64,
    }

    // Events
    struct CollateralDepositedEvent has copy, drop, store {
        user_address: address,
        amount: u64,
        reason: string,
        money_collection_period: u64,
        loan_period: u64,
        interest: u64,
    }

    // Resource to hold global state
    struct LoanSystemState has key, store {
        applications: vector<Application>,
        bonds: vector<Bond>,
        users: vector<address>,
        admins: vector<address>,
    }

    // Initialize the state
    public fun initialize(signer: &signer) {
        move_to(signer, LoanSystemState {
            applications: vector::empty<Application>(),
            bonds: vector::empty<Bond>(),
            users: vector::empty<address>(),
            admins: vector::singleton(signer::address_of(signer)),
        });
    }

    // User Functions
    public fun sign_in_user(signer: &signer) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let user_address = signer::address_of(signer);

        // Register user if not already registered
        if (!vector::contains(&state.users, user_address)) {
            vector::push_back(&mut state.users, user_address);
        }
    }

    public fun sign_in_admin(signer: &signer) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let admin_address = signer::address_of(signer);

        // Only an admin can register another admin
        assert!(vector::contains(&state.admins, admin_address), error(NOT_AUTHORIZED));
        vector::push_back(&mut state.admins, admin_address);
    }

    public fun deposit_collateral(
        signer: &signer,
        amount: u64,
        reason: string,
        money_collection_period: u64,
        loan_period: u64,
        interest: u64
    ) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let user_address = signer::address_of(signer);

        // Ensure the user is registered
        assert!(vector::contains(&state.users, user_address), error(USER_NOT_REGISTERED));

        // Emit collateral deposited event
        event::emit_event<CollateralDepositedEvent>(&CollateralDepositedEvent {
            user_address,
            amount,
            reason,
            money_collection_period,
            loan_period,
            interest,
        });
    }

    public fun create_application(
        signer: &signer,
        amount: u64,
        interest: u64,
        reason: string,
        money_collection_period: u64,
        loan_period: u64
    ) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let user_address = signer::address_of(signer);

        // Ensure the user is registered
        assert!(vector::contains(&state.users, user_address), error(USER_NOT_REGISTERED));

        // Create a loan application
        let application_id = vector::length(&state.applications) as u64;
        let application = Application {
            id: application_id,
            user_address,
            amount,
            interest,
            reason,
            money_collection_period,
            loan_period,
            status: "Pending",
        };

        vector::push_back(&mut state.applications, application);
    }

    public fun create_bond(
        signer: &signer,
        amount: u64,
        interest: u64,
        start_date: u64,
        stop_date: u64
    ) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let user_address = signer::address_of(signer);

        // Ensure the user is registered
        assert!(vector::contains(&state.users, user_address), error(USER_NOT_REGISTERED));

        // Create a bond
        let bond_id = vector::length(&state.bonds) as u64;
        let bond = Bond {
            id: bond_id,
            user_address,
            amount,
            investors: vector::empty<address>(),
            start_date,
            stop_date,
            interest,
        };

        vector::push_back(&mut state.bonds, bond);
    }

    public fun approve_application(signer: &signer, application_id: u64) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let admin_address = signer::address_of(signer);

        // Ensure the signer is an admin
        assert!(vector::contains(&state.admins, admin_address), error(NOT_AUTHORIZED));

        // Approve the application
        let application = &mut state.applications[application_id as usize];
        application.status = "Approved";
    }

    public fun discard_application(
        signer: &signer,
        application_id: u64,
        reason: string
    ) {
        let state = borrow_global_mut<LoanSystemState>(signer::address_of(signer));
        let admin_address = signer::address_of(signer);

        // Ensure the signer is an admin
        assert!(vector::contains(&state.admins, admin_address), error(NOT_AUTHORIZED));

        // Discard the application
        let application = &mut state.applications[application_id as usize];
        application.status = "Discarded: " + reason;
    }

    public fun get_open_loans(): vector<Application> acquires LoanSystemState {
        let state = borrow_global<LoanSystemState>(@0x1); // Replace with your address
        vector::filter(&state.applications, fun (application) {
            application.status == "Approved"
        })
    }
}
