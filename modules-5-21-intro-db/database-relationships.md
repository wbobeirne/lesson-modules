autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

# Databases #3: Relationships & Keys

---

# Database Relationships

* The tables we learned about before don't merely live in isolation, they often reference each other
* Articles have authors, products have sellers, teams have players etc.
* Postgres and many other databases are often called _relational_ databases because of this, because they provide us ways of linking tables together

---

# Primary Key

* Most tables include an ID column
* It holds a unique value for each row in a table to be referenced by
* Most ID columns are automatically populated
* We can do this by making the data type SERIAL, an auto-incrementing integer

```sql
CREATE TABLE people (
  id SERIAL PRIMARY KEY
  username VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(255),
  last_name VARCHAR(255) NOT NULL,
  age INT DEFAULT 21
);
```

---

# Relationships

- Imagine your app has users, and users have profiles
- You store the user profile information in a separate table to reduce the number of columns in your users table
- You need a way to associate a `profile` row with a `user` row
- Primary keys and references to them (often called "foreign keys") are used to create this relationship

---

# Relationships (Example)

```sql
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(256)
);

CREATE TABLE profiles (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users,
	photo VARCHAR(256)
);
```
```
+---------------+    +--------------------------+
| users         |    | profiles                 |
+---------------+    +--------------------------+
| id | isername |    | id | user_id | photo     |
+---------------+    +--------------------------+
|  7 | salpal   |    |  1 | 7       | sally.jpg |
|  8 | nedster  |    |  2 | 9       | ned.png   |
|  9 | doodman  |    |  3 | 8       | s1.png    |
+---------------+    +--------------------------+
```

---

# Foreign Keys

* Foreign keys can be used to associate data from one table to data from another table
* But they're more than just a reference a row/record in another table
* Foreign keys enforce constraints and provide data integrity
* For instance, if we tried to reference something that didn't exist, we'd get an error

---

# Foreign Keys (Cont.)

* The foreign key constraint in `profiles` guarantees that no profile record can be inserted with a user_id value that does not exist.
* That would cause the database to contain invalid data.
* This is referred to as a referential constraint
* Referential constraints keep the database consistent

---

# Foreign Keys
### Example constraint violation

This is what happens when you try to insert a profile record with a non existing user ID.

```
Cannot add or update a child row:
a foreign key constraint fails
(`nycda`.`profiles`, CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`))
```

---

# Foreign Keys

* Referential constraints are even more important when it comes to deleting records
* If I delete Sally (user ID 7), is Sally's profile record still relevant?
  The answer is probably no. Foreign key constraints can be configured to "cascade delete".
* You can have the profile record automatically deleted when the related user record is deleted
* The profile record is not used by any other table. It has a direct 1-to-1 relationship with a user.
  (there is no point in keeping it)

```
+-------------+    +--------------------------+
| users       |    | profiles                 |
+-------------+    +--------------------------+
| id | name   |    | id | user_id | photo     |
+-------------+    +--------------------------+
|  7 | Sally  |    |  1 | 7       | sally.jpg |
|  8 | Ned    |    |  2 | 9       | ned.png   |
|  9 | Sally  |    |  3 | 8       | s1.png    |
+-------------+    +--------------------------+
```

---

# Database Relationships: 1-to-1

- In a one-to-one relationship, a record in one table is related to only one record in another table

- Examples:
  One `users` record has one `profiles` record
  One `customers` record has one `customer_details` record
  One `citizens` record has one `social_security_numbers` record

---

# Database Relationships: 1-to-1

Implementing a 1-1 relationship

1. Add a column to one of the tables being linked together that **references** the **PRIMARY ID** of the other table
1. Add a **FOREIGN KEY CONSTRAINT** to the table with the column referencing the **PRIMARY ID** of the other table

In this case the `profiles` table will have a `user_id` column that references the `id` column on the `users` table.

```
+-------------+    +--------------------------+
| users       |    | profiles                 |
+-------------+    +--------------------------+
| id | name   |    | id | user_id | photo     |
+-------------+    +--------------------------+
|  7 | Sally  |    |  1 | 7       | sally.jpg |
|  8 | Ned    |    |  2 | 9       | ned.png   |
|  9 | Sally  |    |  3 | 8       | s1.png    |
+-------------+    +--------------------------+
```

---

# Database Relationships: 1-to-1

A true 1-to-1 relationship means that every user can have no more than one profile!

```
+-------------+    +--------------------------+
| users       |    | profiles                 |
+-------------+    +--------------------------+
| id | name   |    | id | user_id | photo     |
+-------------+    +--------------------------+
|  7 | Sally  |    |  1 | 7       | sally.jpg |
|  8 | Ned    |    |  2 | 9       | ned.png   |
|  9 | Sally  |    |  3 | 8       | s1.png    |
+-------------+    +--------------------------+
```

---

# Quiz

What constraint would we use to ensure that the profiles table doesn't have more than one row/record with the same user_id value?

```
+-------------+    +--------------------------+
| users       |    | profiles                 |
+-------------+    +--------------------------+
| id | name   |    | id | user_id | photo     |
+-------------+    +--------------------------+
|  7 | Sally  |    |  1 | 7       | sally.jpg |
|  8 | Ned    |    |  2 | 9       | ned.png   |
|  9 | Sally  |    |  3 | 8       | s1.png    |
+-------------+    +--------------------------+
```

---

# Answer

A UNIQUE constraint

No 1-to-1 relationship is truly 1-to-1 without a UNIQUE constraint on the foreign key column.

```sql
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE profiles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) UNIQUE, /* References users.id UNIQUE */
    photo VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE /* FOREIGN KEY CONSTRAINT */
);
```

```
+-------------+    +--------------------------+
| users       |    | profiles                 |
+-------------+    +--------------------------+
| id | name   |    | id | user_id | photo     |
+-------------+    +--------------------------+
|  7 | Sally  |    |  1 | 7       | sally.jpg |
|  8 | Ned    |    |  2 | 9       | ned.png   |
|  9 | Sally  |    |  3 | 8       | s1.png    |
+-------------+    +--------------------------+
```

---

## Database Relationships: 1-to-many

- In a one-to-many relationship, a record in one table is related to many records in another table

- Examples:
  One **users** record has many **blog_posts**
  One **blog_posts** record has many **comments**
  One **users** record has many **tweets**

---

## Database Relationships: 1-to-many

- Users can have many blog posts
- Ned has two blog posts
- Sally has two blog posts

```
+-------------+    +-------------------------+
| users       |    | blog_posts              |
+-------------+    +-------------------------+
| id | name   |    | id | user_id | title    |
+-------------+    +-------------------------+
|  7 | Sally  |    |  1 | 7       | foo      |
|  8 | Ned    |    |  2 | 7       | hello    |
|  9 | Bob    |    |  3 | 8       | bar      |
+-------------+    |  4 | 8       | baz      |
                   +-------------------------+
```

---

## Database Relationships: 1-to-many

1-to-many is implemented the same way as a 1-to-1 but without the UNIQUE constraint on the FOREIGN KEY column.

1. Add a column to one of the tables being linked together that **references** the **PRIMARY ID** of the other table
1. Add a **FOREIGN KEY CONSTRAINT** to the table with the column referencing the **PRIMARY ID** of the other table

---

## Database Relationships: 1-to-many

1. Add a column to one of the tables being linked together that **references** the **PRIMARY ID** of the other table
1. Add a **FOREIGN KEY CONSTRAINT** to the table with the column referencing the **PRIMARY ID** of the other table

```sql
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE blog_posts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL, /* References users.id NOT UNIQUE */
    title VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE /* FOREIGN KEY CONSTRAINT */
);
```

```
+-------------+    +-------------------------+
| users       |    | blog_posts              |
+-------------+    +-------------------------+
| id | name   |    | id | user_id | title    |
+-------------+    +-------------------------+
|  7 | Sally  |    |  1 | 7       | foo      |
|  8 | Ned    |    |  2 | 7       | hello    |
|  9 | Bob    |    |  3 | 8       | bar      |
+-------------+    |  4 | 8       | baz      |
                   +-------------------------+
```

---

# Quiz

What is the difference between a 1-to-1 and 1-to-many relationship when it comes to CONSTRAINTS?

---

# Answer

What is the difference between a 1-to-1 and 1-to-many relationship when it comes to CONSTRAINTS?

**1-to-1 has a UNIQUE constraint on the column referencing the other table, 1-to-many does not**

Structurally, there is no other difference.

---

## Database Relationships: many-to-many

- In a many-to-many relationship, a record in one table is related to many records in another table and vice versa.

- Examples:
  A student can take multiple classes
  A class can have multiple students

  Orders can have many Products
  Products can belong to many Orders

---

## Database Relationships: many-to-many

Implementing a many-to-many relationship involves a join table. Also known as a pivot table.

The pivot table will associate records together from two separate tables.

![right 130%](resources/pivot-table.png)

---

## Database Relationships: many-to-many

Implementing a many-to-many relationship

1. Create a pivot table
1. Add a column for each associated table that will reference the PRIMARY KEY of the associated table
1. Add a FOREIGN KEY constraint for each column referencing a PRIMARY KEY of another table

```sql
CREATE TABLE enrollments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  student_id INT(11) NOT NULL,
  class_id INT(11) NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
);
```

![right 130%](resources/pivot-table.png)

---

# A full database diagram

![right 90% ](resources/database-diagram.png)

- A "full" db diagram has all of your tables with their columns and data types

- The relationships between tables are illustrated with arrows

**1 ---> 0..n** *= one to many*

**1 ---> 1** *= one to one*

**0..n  ---> 0..n** *= many to many*

---

# Exercise

- Let's build a database diagram for an existing major website together!

^ amazon?
  twitter?
  yelp?

---

# Exercise

- Develop a database diagram for one of your favorite websites.

- Start with the users table and go from there!

- Be sure to indicate the relationships between different tables in the database

- You could use [www.draw.io](https://www.draw.io/) or a pen and paper

---

# A final word/summary

A **database** is composed of **tables**. Each **table** has **columns** and can be **related** to other tables in the database. Each column has a **data type**. Each table also has **rows** of data which correspond to the **column names** and data types described in the **schema**.

**And they all lived happily ever after!**

---

# Resources

### TeamTreeHouse

[Database Foundations - Introduction to Data, Databases and SQL](https://teamtreehouse.com/library/database-foundations)
