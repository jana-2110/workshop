<?php
session_start();

$host = "mysql";
$user = "root";
$password = "admin123";
$dbname = "workshopdb";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

// Create table
$conn->query("
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
");

// 🔐 LOGIN
if (isset($_POST['login'])) {
    if ($_POST['username'] == "admin" && $_POST['password'] == "admin") {
        $_SESSION['user'] = "admin";
    } else {
        $error = "Invalid Login!";
    }
}

// LOGOUT
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
}

// ➕ ADD
if (isset($_POST['add'])) {
    $name = $conn->real_escape_string($_POST['student_name']);
    $conn->query("INSERT INTO students (name) VALUES ('$name')");
}

// ❌ DELETE
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $conn->query("DELETE FROM students WHERE id=$id");
}

// ✏️ UPDATE
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $name = $conn->real_escape_string($_POST['student_name']);
    $conn->query("UPDATE students SET name='$name' WHERE id=$id");
}

// 🔍 SEARCH + 📄 PAGINATION
$limit = 5;
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$start = ($page - 1) * $limit;

$search = isset($_GET['search']) ? $_GET['search'] : "";

if ($search != "") {
    $search_safe = $conn->real_escape_string($search);
    $total_result = $conn->query("SELECT COUNT(*) as total FROM students WHERE name LIKE '%$search_safe%'");
    $result = $conn->query("SELECT * FROM students WHERE name LIKE '%$search_safe%' ORDER BY id ASC LIMIT $start, $limit");
} else {
    $total_result = $conn->query("SELECT COUNT(*) as total FROM students");
    $result = $conn->query("SELECT * FROM students ORDER BY id ASC LIMIT $start, $limit");
}

$total_row = $total_result->fetch_assoc();
$total_pages = ceil($total_row['total'] / $limit);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

<div class="container mt-5">

<?php if (!isset($_SESSION['user'])) { ?>

    <!-- 🔐 LOGIN FORM -->
    <h2 class="text-center">Login</h2>

    <?php if (isset($error)) echo "<p class='text-danger'>$error</p>"; ?>

    <form method="POST" class="w-25 mx-auto">
        <input name="username" class="form-control mb-2" placeholder="Username" required>
        <input name="password" type="password" class="form-control mb-2" placeholder="Password" required>
        <button name="login" class="btn btn-primary w-100">Login</button>
    </form>

<?php } else { ?>

    <!-- APP -->
    <div class="d-flex justify-content-between">
        <h2>🎓 Student Management</h2>
        <a href="?logout=true" class="btn btn-danger">Logout</a>
    </div>

    <!-- ➕ ADD -->
    <form method="POST" class="d-flex my-3">
        <input name="student_name" class="form-control me-2" placeholder="Enter name" required>
        <button name="add" class="btn btn-success">Add</button>
    </form>

    <!-- 🔍 SEARCH -->
    <form method="GET" class="d-flex mb-3">
        <input name="search" class="form-control me-2" placeholder="Search" value="<?php echo $search; ?>">
        <button class="btn btn-primary">Search</button>
    </form>

    <!-- 📊 TABLE -->
    <table class="table table-bordered text-center">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
        <?php while ($row = $result->fetch_assoc()) { ?>
            <tr>
                <form method="POST">
                    <td><?php echo $row['id']; ?></td>

                    <td>
                        <input name="student_name" value="<?php echo $row['name']; ?>" class="form-control">
                    </td>

                    <td><?php echo $row['created_at']; ?></td>

                    <td>
                        <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

                        <button name="update" class="btn btn-warning btn-sm">✏️</button>

                        <!-- Delete Button -->
                        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#del<?php echo $row['id']; ?>">
                            ❌
                        </button>
                    </td>
                </form>
            </tr>

            <!-- Modal -->
            <div class="modal fade" id="del<?php echo $row['id']; ?>">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5>Confirm Delete</h5>
                        </div>

                        <div class="modal-body">
                            Delete <?php echo $row['name']; ?>?
                        </div>

                        <div class="modal-footer">
                            <a href="?delete=<?php echo $row['id']; ?>" class="btn btn-danger">Yes</a>
                            <button class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        </div>

                    </div>
                </div>
            </div>

        <?php } ?>
        </tbody>
    </table>

    <!-- 📄 PAGINATION -->
    <nav>
        <ul class="pagination">
        <?php for ($i = 1; $i <= $total_pages; $i++) { ?>
            <li class="page-item">
                <a class="page-link" href="?page=<?php echo $i; ?>&search=<?php echo $search; ?>">
                    <?php echo $i; ?>
                </a>
            </li>
        <?php } ?>
        </ul>
    </nav>

<?php } ?>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>

<?php $conn->close(); ?>
