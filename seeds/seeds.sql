use c12employees_db;
INSERT INTO department (id,department_name)
VALUES (1,"Marketing"),
       (2,"Sales"),  
       (3,"Customer Service"),
       (4,"Support"),
       (5,"Human Resources");
    
INSERT INTO role (id,title,salary)
VALUES (1, "Executive", 100000),
       (2, "Manager", 80000),
       (3, "Associate", 60000);
       
INSERT INTO employee (id,first_name,last_name,role_id,manager_id)
VALUES (1,"Fname01","Lname01",1,1),
(2,"Fname02","Lname02",2,1),
(3,"Fname03","Lname03",3,1),
(4,"Fname04","Lname04",1,4),
(5,"Fname05","Lname05",2,4),
(6,"Fname06","Lname06",3,4),
(7,"Fname07","Lname07",1,5),
(8,"Fname08","Lname08",2,5),
(9,"Fname09","Lname09",3,5),
(10,"Fname10","Lname10",1,6),
(11,"Fname11","Lname11",2,6),
(12,"Fname12","Lname12",3,6),
(13,"Fname13","Lname13",1,7),
(14,"Fname14","Lname14",2,7),
(15,"Fname15","Lname15",3,7),
(16,"Fname16","Lname16",1,8),
(17,"Fname17","Lname17",2,8),
(18,"Fname18","Lname18",3,8),
(19,"Fname19","Lname19",1,9),
(20,"Fname20","Lname20",2,9),
(21,"Fname21","Lname21",3,9);
