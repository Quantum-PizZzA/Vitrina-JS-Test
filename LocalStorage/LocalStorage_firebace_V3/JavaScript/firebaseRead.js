function FirebaseRead() {
  var config = {
    apiKey: "AIzaSyAjT9t5YL0mSsPxyKAVLDJR2ZRhcms1DIw",
    authDomain: "html-js-firebase.firebaseapp.com",
    databaseURL: "https://html-js-firebase-default-rtdb.firebaseio.com",
    projectId: "html-js-firebase",
    storageBucket: "html-js-firebase.appspot.com",
    messagingSenderId: "135572650662",
    appId: "1:135572650662:web:03742e1578aa8b89509267"
  };
  firebase.initializeApp(config);

  function getData(query = "") {
    var s = "";
    firebase
      .database()
      .ref("/")
      .once("value", function (snapshot, query) {
        snapshot.forEach(function (childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          iFirebase = 1;
          Object.entries(childData).forEach(([key, value]) => {
            Object.entries(value).forEach(([keyUser, formatJSON]) => {
              stringJSON = JSON.stringify(formatJSON);

              if (
                stringJSON.indexOf(query) > 0 ||
                query == null ||
                query.length == 0
              )
                document.getElementById("data").innerHTML +=
                  '<div class="container"> <pre href="#">' +
                  "\t" +
                  iFirebase +
                  "\t EAN: " +
                  formatJSON.EAN +
                  "\t INN: " +
                  formatJSON.INN +
                  "\t Price: " +
                  formatJSON.Price +
                  "\t Name: " +
                  formatJSON.Name +
                  "\t User: " +
                  formatJSON.tele +
                  "</pre></div>";
              iFirebase++;

              document.getElementById("Firebase").innerHTML = iFirebase;
            });
          });
        });
      });
  }
  function packet_s() {
    document.write('<h6 id="filterValue"></h6>');
    document.write(
      '<div class="container"> > <input type="text" id="filterInput" placeholder="Поиск..." /> </div>'
    );
    document.write('<ul id="data"></ul>');
    getData();
    filterName();
    let filterInput = document.getElementById("filterInput");
    filterInput.addEventListener("keyup", filterName);
  }

  function filterName() {
    let filterValue = document
      .getElementById("filterInput")
      .value.toUpperCase();

    document.getElementById("filterInput").innerHTML = filterValue;

    let ul = document.getElementById("data");
    let li = ul.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("pre")[0];
      if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  packet_s();
}
