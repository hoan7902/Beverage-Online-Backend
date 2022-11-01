CREATE DATABASE test;
USE test;
CREATE TABLE drink(
    id int primary key auto_increment,
    name varchar(20) not null,
    category varchar(20) not null
)