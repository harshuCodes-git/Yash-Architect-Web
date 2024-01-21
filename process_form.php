<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $service = $_POST["service"];
    $message = $_POST["message"];

    // Compose email content
    $subject = "New Career Form Submission";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mobile: $mobile\n";
    $body .= "Service: $service\n";
    $body .= "Message:\n$message";

    // Recipient email address (replace with your Gmail address)
    $to = "dubeyharshu0921@gmail.com";

    // Additional headers
    $headers = "From: $email";

    // Send email
    $success = mail($to, $subject, $body, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo "Thank you for your submission! We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle invalid request method
    echo "Invalid request method.";
}
?>