<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "pahiaba7@gmail.com"; // Replace with your actual email address

    // Set the subject of the email
    $subject = "Contact Form Submission from $name";

    // Compose the email message
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $messageBody, $headers)) {
        // Email sent successfully
        header("Location: thank-you.html"); // Redirect to a thank-you page
        exit();
    } else {
        // Email sending failed
        echo "Error: Email could not be sent.";
    }
}
?>
