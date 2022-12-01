<?php
$input = file_get_contents("input.txt");
$caloriesPerElf = explode("\n\n", $input);
$currentMax = 0;

foreach ($caloriesPerElf as $calories){
    $calories = array_map('intval', explode("\n", $calories));
    $sum = array_sum($calories);
    if($sum > $currentMax){
        $currentMax = $sum;
    }
}
echo $currentMax;
// 66719