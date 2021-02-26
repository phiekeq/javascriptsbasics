<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="description" content="Template Page"> <!-- Change the content and add a short description of your web page -->
    <meta name="author" content="Philip Ekelof"> <!-- Change the content and add your name -->

    <title>Basic Template</title>

</head>

<body>
<script>
    var x = 12;
    var y = 13;
    var z = x + y;
    document.getElementById("demo").innerHTML = z;
    </script>

    <script>
    var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var antalUdda = 0;
        var antalJamna = 0;
        for (var i = 0; i < 10; i++) {
            if (lista[i] % 2 == 0) {
                antalJamna++;
            }
            else {
                antalUdda++;
            }
        }
        alert(Antalet jämna tal är ${antalJamna} och antal udda är ${antalUdda});
    </script>    
    <script>
    var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = 0; i < 10; i++) {
    console.log(lista[i]);
}
    </script>


</body>
</html>
