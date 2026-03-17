<?php
// Simple contact form handler
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $msg = htmlspecialchars($_POST['message']);

    if ($name && $email && $msg) {
        $message = "Message sent successfully!";
    } else {
        $message = "Please fill all fields.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
}
header {
    padding: 20px;
    text-align: center;
    background: #020617;
}
nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}
section {
    padding: 60px 20px;
    text-align: center;
}
.hero {
    background: linear-gradient(135deg, #2563eb, #9333ea);
}
.card {
    background: #1e293b;
    padding: 20px;
    margin: 15px;
    border-radius: 10px;
    display: inline-block;
    width: 250px;
}
form input, form textarea {
    width: 80%;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: none;
}
button {
    padding: 10px 20px;
    border: none;
    background: #2563eb;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}
footer {
    background: #020617;
    padding: 20px;
}
</style>

</head>
<body>

<header>
    <h1>My Portfolio</h1>
    <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
</header>

<section class="hero">
    <h2>Hello, I'm a Developer</h2>
    <p>I build web applications and cool projects 🚀</p>
</section>

<section id="about">
    <h2>About Me</h2>
    <p>This is a sample portfolio. Replace this text with your own details.</p>
</section>

<section id="skills">
    <h2>Skills</h2>
    <div class="card">HTML</div>
    <div class="card">CSS</div>
    <div class="card">JavaScript</div>
    <div class="card">PHP</div>
    <div class="card">Docker</div>
</section>

<section id="projects">
    <h2>Projects</h2>
    <div class="card">
        <h3>Project 1</h3>
        <p>Short description of the project.</p>
    </div>
    <div class="card">
        <h3>Project 2</h3>
        <p>Short description of the project.</p>
    </div>
</section>

<section id="contact">
    <h2>Contact</h2>

    <?php if ($message): ?>
        <p><?php echo $message; ?></p>
    <?php endif; ?>

    <form method="POST">
        <input type="text" name="name" placeholder="Your Name"><br>
        <input type="email" name="email" placeholder="Your Email"><br>
        <textarea name="message" placeholder="Your Message"></textarea><br>
        <button type="submit">Send</button>
    </form>
</section>

<footer>
    <p>© <?php echo date("Y"); ?> Portfolio. All rights reserved.</p>
</footer>

</body>
</html>