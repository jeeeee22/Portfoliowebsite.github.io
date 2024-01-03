<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // You can process the form data here (e.g., send an email, save to a database)
  // For example, sending an email
  $to = "your-email@example.com"; // Replace with your email address
  $subject = "New message from $name";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  mail($to, $subject, $body);

  // Redirect after form submission (change the URL to your thank you page)
  header("Location: thank_you.html");
  exit();
}
?>
