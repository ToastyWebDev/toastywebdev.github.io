-- Create a table to store the food items
CREATE TABLE food (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(8, 2),
    note TEXT,
    image VARCHAR(255)
);

-- Insert the data into the table
INSERT INTO food (id, name, price, note, image) VALUES
(0, 'Apple Juice', 20.00, 'Refreshing juice made from ripe apples', 'image/Apple Juice.png'),
(1, 'Bonaqua Water', 15.00, 'Still mineral water for hydration', 'image/Bonaqua Water.png'),
(2, 'Cappy Apple Juice', 25.00, 'Premium apple juice from selected apples', 'image/Cappy Apple Juice.png'),
(3, 'Coke', 18.00, 'World-famous cola with a caramel flavor', 'image/Coke.png'),
(4, 'Coke Zero', 18.00, 'Sugar-free variant of Coca-Cola', 'image/Coke Zero.png'),
(5, 'Creme Soda', 18.00, 'Beloved green cream soda with a creamy flavor', 'image/Creme Soda.png'),
(6, 'Fanta', 18.00, 'Carbonated fruity soft drink', 'image/Fanta.png'),
(7, 'Orange Juice', 20.00, 'Zesty and refreshing juice from squeezed oranges', 'image/Orange Juice.png'),
(8, 'Sprite', 18.00, 'Lemon-lime flavored soda for a crisp taste', 'image/Sprite.png'),
(9, 'Powerade', 25.00, 'Isotonic sports drink for hydration and electrolytes', 'image/Powerade.png'),
(10, 'Stoney Zero', 18.00, 'Sugar-free fiery ginger beer', 'image/Stoney.png'),
(11, 'Brekkie', 40.00, '1 egg, 2 rushers of streaky', 'https://wimpy.co.za/site/images/pages/menu/2021/breakfast/brekkie/mzansi-breakfast-generic-(400px-x-300px).webp'),
(12, '1/4 Chicken', 45.00, 'Meal served with small chips', 'image/quarter-chicken.webp'),
(13, '1/2 Chicken', 110.00, 'Meal served with medium chips', 'image/half-chicken.png'),
(14, 'Full Chicken', 150.00, 'Meal served with large chips', 'image/full-checken.png'),
(15, 'Pork Ribs', 220.00, 'Meal served with medium chips', 'image/pork-ribs.png'),
(16, 'Pork Ribs & 1/4 Chicken', 260.00, 'Meal served with medium chips', 'image/pork-ribs-quarter-chicken.webp'),
(17, 'Beef Ribs', 230.00, 'Meal served with medium chips', 'image/beef-ribs.png'),
(18, 'Beef Ribs & 1/4 Chicken', 280.00, 'Meal served with medium chips', 'image/beef-ribs-quarter-chicken.png'),
(19, 'Wors', 40.00, 'Meal served with small pap', 'image/wors.png'),
(20, 'Brisket', 60.00, 'Meal served with small pap', 'image/brisket.png'),
(21, 'Brisket & Wors', 85.00, 'Meal served with small pap', 'image/brisket-wors.webp'),
(22, 'Plain', 20.00, '200ml Cup', 'image/classic.png'),
(23, 'Strawberry', 24.00, '200ml Cup', 'image/strawberry.png'),
(24, 'Chocolate', 22.00, '200ml Cup', 'image/chocolate.png'),
(25, 'Caramel Dip', 26.00, '200ml Cup', 'image/caramel-dip.png'),
(26, 'Chocolate Dip', 26.00, '200ml Cup', 'image/chocolate-dip.png'),
(27, 'Chocolate Pipple', 24.00, '200ml Cup', 'image/chocolate-ripple.png'),
(28, 'Plain', 7.00, 'Cone - 950kJ', 'image/Cone-Plain.png'),
(29, 'Caramel Dip', 12.00, 'Cone - 950kJ', 'image/Cone-Caramel.png'),
(30, 'Chocolate Dip', 12.00, 'Cone - 950kJ', 'image/Cone-Chocolate.png'),
(31, 'Chocolate Ripple', 12.00, 'Cone - 950kJ', 'image/Cone-Ripple.png');
