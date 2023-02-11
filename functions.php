<?php
add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles');

function add_scripts_and_styles() {
    wp_deregister_script('jquery');

    wp_register_script( 'jquery', get_template_directory_uri() . '/' . '/assets/js/jquery-3.6.0.min.js',  false, null, true ); 

    wp_enqueue_script( 'jquery' );   

    wp_enqueue_script( 'jqueryui', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', array('jquery'), null, 'footer' ); 
    wp_enqueue_script( 'main', get_template_directory_uri(). '/' . '/assets/js/main.js', array('jqueryui', 'jquery'), null, 'footer' ); 

    // wp_enqueue_script( 'calculator', get_template_directory_uri(). '/' . '/assets/js/calculator.js', array('jquery'), null, 'footer' ); 

    // wp_enqueue_script( 'burger', get_template_directory_uri(). '/' . '/assets/js/burger.js', array('jquery'), null, 'footer' ); 

    // wp_enqueue_script( 'cars', get_template_directory_uri(). '/' . '/assets/js/cars.js', array('jquery', 'calculator'), null, 'footer' ); 

    // wp_enqueue_script( 'cond', get_template_directory_uri(). '/' . '/assets/js/cond.js', array('jquery', 'cars'), null, 'footer' ); 

    // wp_enqueue_script( 'values', get_template_directory_uri(). '/' . '/assets/js/values.js', array('jquery', 'cond'), null, 'footer' ); 

    // wp_enqueue_script( 'date', get_template_directory_uri(). '/' . '/assets/js/date.js', array('jquery', 'values'), null, 'footer' ); 

    // wp_enqueue_script( 'animation', get_template_directory_uri(). '/' . '/assets/js/animation.js', false, null, 'footer' ); 

    // wp_enqueue_script( 'changeCar', get_template_directory_uri(). '/' . '/assets/js/changeCar.js', array('jquery', 'date'), null, 'footer' ); 

    // wp_enqueue_script( 'carusel', get_template_directory_uri(). '/' . '/assets/js/carusel.js', array('jquery', 'carusel'), null, 'footer' ); 

    wp_enqueue_style( 'main', get_stylesheet_uri(), false );
    // wp_enqueue_style( 'style',get_template_directory_uri() . '/assets/css/style.css', false );
    
}

?>