function loginUser() {
  // simple validation
  alert("Login successful!");

  // redirect to dashboard
  window.location.href = "dashboard.html";
}
    const data = await response.json();

    localStorage.setItem("result", JSON.stringify(data));
    window.location.href = "dashboard.html";
  };
}
