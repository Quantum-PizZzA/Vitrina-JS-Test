<?php
dl("php_openssl.dll");

function file_cache_contents($url=false, $use_include_path=false, $ctx=null)
    {
    $opts="";
    if (is_resource($ctx))
      $opts=stream_context_get_options($ctx);
    $filename=substr(md5($url.serialize($opts)),0,8).".tmp";
    if (is_file($filename))
      return file_get_contents($filename);
    $s=file_get_contents($url, false, $ctx);
    file_put_contents($filename, $s);
    return $s;
    }

function get_ozon($path, $data=false)
    {
    $client_id=356842;
    $api_key="7b01e709-10d3-4587-8538-f06a10960414";

    if (is_array($data))
      $data=json_encode($data);

    $data=str_replace("[]","{}",$data);
    
    if ($data!==false)

      {
      $post=$data;
      $opts["http"]["method"]="POST";
      $opts["http"]["content"]= $post;
      }

    $opts["http"]["header"]="Client-Id: $client_id";
    $opts["http"]["header"].="\r\nApi-Key: $api_key";
    $opts["http"]["header"].="\r\nContent-Type: application/json";


    $point="https://api-seller.ozon.ru";
    
    $url = $point.$path;
    $ctx = stream_context_create($opts);

    $s = file_cache_contents($url, false, $ctx);

    return (json_decode($s,true));
    }

function product_info($product_id)
    {
    $path="/v2/product/info";
    $data["product_id"] = $product_id;
    return get_ozon($path, $data);
    }

function product_list($limit=false)
    {
    $data["filter"]["visibility"]="ALL";
    if ($limit)
      $data["limit"]=$limit;
    $path="/v2/product/list";
    return get_ozon($path, $data);
    }

function product_list_assoc($x=false)
    {
    if (!is_array($x))
      $x=product_list($x);
    $arr=array();
    foreach ($x["result"]["items"] as $k_v)
      $arr[$k_v["product_id"]]=$k_v["offer_id"];
    return $arr;
    }

$path="/v4/product/info/prices";

$data["filter"]["visibility"]="ALL";
$data["limit"]="167";

$arr=(get_ozon($path, $data));
print_r($arr);
