const div = document.querySelector("div");
setTimeout(() => {
  div.innerHTML = 10;
  setTimeout(() => {
    div.innerHTML =9;
    setTimeout(() => {
      div.innerHTML = 8;
      setTimeout(() => {
        div.innerHTML = 7;
        setTimeout(() => {
          div.innerHTML = 6;
          setTimeout(() => {
            div.innerHTML = 5;
            setTimeout(() => {
              div.innerHTML = 4;
              setTimeout(() => {
                div.innerHTML = 3;
                setTimeout(() => {
                    div.innerHTML = 2;
                    setTimeout(() => {
                      div.innerHTML = 1;
                      setTimeout(() => {
                        div.innerHTML = "Happy Independence Day";
                      }, 2200);
                    }, 2000);
                  }, 1800);
                }, 1600);
              }, 1400);
            }, 1200);
          }, 1000);
        }, 800);
      }, 600);
    }, 400);
  }, 200);