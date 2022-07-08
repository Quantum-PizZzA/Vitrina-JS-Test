<?php
/*
Слоговое письмо хангыля
Диапазон: AC00—D7AF Количество символов: 11184
44032-55215
*/

//I needed a function that could split a string from the end with any left over
// chunk being at the beginning of the array (the beginning of the string). 
//Преобразует строку в массив
//в отличие от str_split()
//допускает "отрицательную" длину фрагментов
//в этом случае отсчет фрагментов идет с конца
function str_split_ex($str, $sz)
    {
    // splits a string "starting" at the end, so any left over (small chunk)
    // is at the beginning of the array.    
    if (!$sz)
      return false;
    if ( $sz > 0 )
      return str_split($str,$sz);    // normal split
    $l = strlen($str);
    $sz = min(-$sz, $l);
    $mod = $l % $sz;
    if (!$mod)
      return str_split($str,$sz);    // even/max-length split
    return array_merge(array(substr($str,0,$mod)),
     str_split(substr($str,$mod),$sz));
    }

function hang($s)
    {
    $s=substr(trim($s),0,4);
    if (!strlen($s))
      return 44032+11110;//0;//44032+11111 ERROR
    $y=intval($s);
    $d=0;
    $o=4-strlen($s);
    if ($o==1)
      $d=10000;
    if ($o==2)
      $d=11000;
    if ($o==3)
      $d=11100;
    return $y+44032+$d;
    }

function unhang($z, $fill=false)
    {
    $y=$z-44032;
    if (($y>=11110)||($y<0))
      return false;
    $d=0;
    $o=0;
    if ($y>=11100)
      {
      $d = 11100;
      $o = 3;
      }
    else if ($y>=11000)
      {
      $d = 11000;
      $o = 2;
      }
    else if ($y>=10000)
      {
      $d = 10000;
      $o = 1;
      }
    $x=$y-$d;
    $r = str_pad($x, 4-$o, '0', STR_PAD_LEFT);
    if (strlen($fill))
      $r = str_pad($r, 4, $fill, STR_PAD_LEFT);
    return $r;//substr($r,-4);
    }


for ($x=44032; $x<44032+11110; $x++)
  {
  //$z=hang($s);
  $s=unhang($x, "_");
  $z=hang(trim($s,"_"));
  $r=unhang($z, "_");
  echo str_pad($s, 4, "_", STR_PAD_LEFT), "\t", $z, "\r\n";
  //echo str_pad($s, 4, "_", STR_PAD_LEFT), "\t", $z, "\t", $x, "\t", $r, "\r\n";
  }
