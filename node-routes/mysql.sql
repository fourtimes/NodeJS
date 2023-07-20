-- orders route
CREATE TABLE
    orders (
        `id` int (20) NOT NULL,
        `name` varchar(155) NOT NULL,
        `email` varchar(155) NOT NULL,
        `created_at` timestamp NOT NULL DEFAULT current_timestamp()
    );

INSERT INTO
    orders (id, name, email)
VALUES
    ('1', 'ashli', 'ashli@gmail.com');

-- images route
CREATE TABLE
    img_user (
        name VARCHAR(20),
        mob_num int (10),
        Place VARCHAR(25),
        created_at timestamp NOT NULL DEFAULT current_timestamp()
    );

INSERT INTO
    img_user (name, mob_num, Place)
VALUES
    ('joe', 987653783, 'chennai'),
    ('nive', 933657683, 'oriko'),
    ('vic', 987637683, 'ooty');

-- registration route
CREATE TABLE
    reg_user (
        name VARCHAR(20),
        amount int (25),
        mob_num int (10),
        Place VARCHAR(25),
        created_at timestamp NOT NULL DEFAULT current_timestamp()
    );

INSERT INTO
    reg_user (name, amount, mob_num, Place)
VALUES
    ('joe', 10000, 987657683, 'chennai'),
    ('nive', 20000, 933653683, 'karaikudi'),
    ('vic', 40000, 987637683, 'cbe');