<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Przesyłanie plików na serwer w PHP</title>
</head>
<body>
    <main>
        <form enctype="multipart/form-data" action="index.php" method="post">
            <label for="plik">Załącz plik:</label><br><br>
            <input type="hidden" name="MAX_FILE_SIZE" value="512000">
            <input type="file" name="plik" id="plik"><br><br>
            <input type="submit" value="Wyślij">
            <input type="reset" value="Wyczyść">
        </form>
    </main>
    <?php
        if(isset($_FILES['plik'])) {
            $ftype = $_FILES['plik']['type'];
            $fsize = $_FILES['plik']['size'];
            $fname = $_FILES['plik']['name'];
            $ftmp = $_FILES['plik']['tmp_name'];
            $ferror = $_FILES['plik']['error'];
            
            if($ferror > 0) {
                echo "<p>Podczas przesyłania pliku wystąpiły błędy. Spróbuj ponownie.</p>";
            } else {
                move_uploaded_file($ftmp, $fname);
                echo "<p>Plik został wysłany!</p>";
            }

            echo "<img src='$fname' alt='Grafika'>";

            unset($ftype);
            unset($fsize);
            unset($fname);
            unset($ftmp);
            unset($ftmp);
            unset($ferror);
        }
    ?>
</body>
</html>