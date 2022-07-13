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
          Object.entries(childData).forEach(([key, value]) => {
            Object.entries(value).forEach(([key2, value2]) => {
              t = JSON.stringify(value2);
              if (t.indexOf(query) > 0 || query == null || query.length == 0)
                document.getElementById("data").innerHTML +=
                  '<li> <a href="#">' + t + "</a></li>";
            });
          });
        });
      });
  }
  function packet_s() {
    document.write('<h3 id="filterValue"></h3>');
    document.write(
      '<input type="text" id="filterInput" placeholder="Поиск..." />'
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

    document.getElementById("filterValue").innerHTML = filterValue;

    let ul = document.getElementById("data");
    let li = ul.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  packet_s();
}

function FirebaseWrite() {
  var firebaseConfig = {
    apiKey: "AIzaSyAjT9t5YL0mSsPxyKAVLDJR2ZRhcms1DIw",
    authDomain: "html-js-firebase.firebaseapp.com",
    databaseURL: "https://html-js-firebase-default-rtdb.firebaseio.com",
    projectId: "html-js-firebase",
    storageBucket: "html-js-firebase.appspot.com",
    messagingSenderId: "135572650662",
    appId: "1:135572650662:web:03742e1578aa8b89509267"
  };

  //init
  firebase.initializeApp(firebaseConfig);

  //Ready Data
  var EAN, INN, Name, Price;
  function Ready() {
    EAN = document.getElementById("eanbox").value;
    INN = document.getElementById("innbox").value;
    Name = document.getElementById("namebox").value;
    Price = document.getElementById("pricebox").value;
  }

  //Insert Process
  document.getElementById("insert").onclick = function () {
    Ready();
    firebase
      .database()
      .ref("HTML-JS-Firebase/Anonymous/" + EAN)
      .set({
        EAN: EAN,
        INN: INN,
        Name: Name,
        Price: Price
      });
  };
}
