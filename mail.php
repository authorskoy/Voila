<?php

$recepient = "";
$sitename = "Viola";

$name = trim($_GET["name"]);
$date = trim($_GET["date"]);
$time = trim($_GET["time"]);
$commensals = trim($_GET["commensals"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \n Дата: $date \n Время: $time \n Колличество гостей: $commensals";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");