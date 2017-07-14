<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/styles.css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    </head>
    <body>
        <div id='wrapper'>
        
        <h1>Print a given matrix (limit 3 - 10 in size) in sprial form:</h1>
        <blockquote>
            <p>The project is a visual answer to illustrate how I was able to solve a matrix problem where you are asked to print the numbers within a matrix in a spiral form.</p>
            <p>An example input would be:<br>
            [ <br>
            [1, 2, 3], <br>
            [4, 5, 6], <br>
            [7, 8, 9], <br>
            ]; <br>
            The expected output for this would be: <br>
            [1, 2, 3, 6, 9, 8, 7, 4, 5]; <br>
            </p>
        </blockquote>
        
        <?php include 'matrix.php'; ?>

        <div id="formWrapper">
        <form method="POST">
            <p>Input a number from 3 - 10</p>
            <input type="text" name="number" placeholder="matrix size" />
            <input type="submit" name="create" value="Create" onclick="runFn();" />
        </form>
        </div>

            <ul>
            <li>Output in 3 forms; the answer, the non-mutated original matrix and html pushed back with PHP and solved by Javascript</li>
            <li>Exercise taken from my teachers at school (commonly asked interview question)</li>
            <li>Form submission sends matrix length to PHP backend which builds the matrix in html form and sends it back where javascript takes care of the rest</li>
            <li>Webpacked with babel for ES6</li>
            <li>Github link to example code:<br> <a href="https://github.com/NickGatti/matrixSpiral" target="_blank">GITHUB PROJECT</a></li>
            </ul>
        
        </div>
        
        <div id="outputWrap">
        <div id="original">Original: No input!</div>
        <div id="answer">Answer: No input!</div>
        </div>
        
        </div>

        <script src="bundle.js"></script>
    </body>
</html>
