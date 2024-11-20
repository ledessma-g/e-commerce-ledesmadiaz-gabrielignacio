const isNoAuthRedirectHome = () => {
    if (!localStorage.getItem("username")) {
      location.href = "../inicio.html";
    }
  }
  
  isNoAuthRedirectHome();