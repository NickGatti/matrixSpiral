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
        <h1>Javascript examples: Press F12</h1>
        
        <h3>Print a given matrix (limit 3 - 10 in size) in sprial form:</h3><br>
        <blockquote>
            <ul>
            <li>Output in 2 forms; the answer and the non-mutated original matrix.</li>
            <li>Exercise taken from my teachers at school (commonly asked interview question)</li>
            <li>Link given here: <a href="http://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/">http://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/</a></li>
            <li>Form submission sends matrix length to PHP backend which builds the matrix and html and sends it back where javascript takes care of the rest</li>
            </ul>
        </blockquote>
        
        <?php include 'matrix.php'; ?>

        <div id="formWrapper">
        <form method="POST">
            <input type="text" name="number" placeholder="matrix size" />
            <input type="submit" name="create" value="Create" onclick="runFn();" />
        </form>
        </div>
        
        </div>
        
        <div id="outputWrap">
        <div id="original">Original: No input!</div>
        <div id="answer">Answer: No input!</div>
        </div>
        
        </div>

        <script src="bundle.js"></script>
    </body>
</html>
