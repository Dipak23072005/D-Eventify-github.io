function openBooking(eventName, price) {
    document.getElementById("bookingForm").style.display = "block";
    document.getElementById("eventName").value = eventName + " - ₹" + price;
}

function closeBooking() {
    document.getElementById("bookingForm").style.display = "none";
}

function submitBooking() {
    let name = document.getElementById("userName").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    alert("🎉 Booking Successful!");
    closeBooking();
}

function submitContact() {
    alert("Message sent successfully!");
}