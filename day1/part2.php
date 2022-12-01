<?php
$input = file_get_contents("input.txt");
$caloriesPerElf = explode("\n\n", $input);

$elves = array_map(function($elf){
    return array_sum(array_map('intval', explode("\n", $elf)));
}, $caloriesPerElf);

rsort($elves);
$topThree = array_sum(array_slice($elves, 0, 3));
echo $topThree;
// 198551