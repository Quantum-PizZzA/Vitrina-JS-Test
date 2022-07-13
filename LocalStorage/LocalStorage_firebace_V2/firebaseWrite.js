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
