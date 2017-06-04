<div id="matrix">
<?php

if ($_POST):
    $size = $_POST['number'];
    if ($size >= 3 && $size <= 10) {
        $newArray = [];
        $counter = 0;
        for($i = 0; $i < $size; $i++) {
            $newArray[] = [];
            for($z = 0; $z < $size; $z++){
                $counter += 1;
                $newArray[$i][$z] = $counter;
            }
        }
    } else {
        ?> Invalid Number </div> <?php return;
    }
    
    ?>
        PHP OUTPUT: 
    <?php foreach($newArray as $row): ?> 
    
    <div class="row">
        
    <?php foreach($row as $cell): ?> 
    
    <div class="cell"><?php echo $cell; ?></div>
    
    <?php endforeach; ?> 
    
    </div>
    
    <?php endforeach; ?> 
    
<?php
endif;
?>
</div>
