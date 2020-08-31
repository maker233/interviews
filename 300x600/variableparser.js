// Direct Seguros DCO

// StepsDCO
// 1.DocuAntonio
//   imagenes
//   variables
//     complejas
//     directas
// 2.Codigo
//   1 parseo variables
//   2 html a minimos
//   3 estilos y colocación

let exitURLs1 = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].landing_page.Url;

let exits1 = () => {
  Enabler.exitOverride("clickTag", exitURLs1);
};

// DRAFT SECTION

// directas
let banner_type = dynamicContent.DCO_DirectSeguros_CocheMoto_Creative[0].banner_type
let bg = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].background_color
let disclaimer = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].disclaimer
let copy_f1_1 = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].copy_frame_1_1
let copy_f1_2 = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].copy_frame_1_2
let copy_f2_1 = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].copy_frame_2_1
let copy_f2_2 = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].copy_frame_2_2
let copy_f2_3 = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].copy_frame_2_3
let copy_prod = dynamicContent.DCO_DirectSeguros_CocheMoto_Creative[0].copy_producto
let prize = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].prize
let vehiculo = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].vehiculo

// complejas
let logo = dynamicContent.Profile[0].logos + 'logo_300x600.png'
let icono_vehiculo = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].assets_path + 'icon_' + vehiculo + '_img.png'
let imagen_fondo = dynamicContent.DCO_DirectSeguros_CocheMoto_Assets[0].assets_path + 'bg_' + vehiculo + '_img.png'
let cta = dynamicContent.Profile[0].logos + 'cta_300x600.png'


// TESTING ZONE
// let banner_type = dynamicContent.Barcelo_ES_PRS_202002_Creatives[0].banner_type;
// coche o moto



// console.log("Screen 1 Intro ------");
// console.log("des_s1_img :", des_s1_img);
// console.log("des_s1_title :", des_s1_title);
// console.log("des_s1_subtitle :", des_s1_subtitle);
// console.log("des_s1_bg :", des_s1_bg);
// console.log("des_s1_footer :", des_s1_footer);
// console.log("Screen 2 - Hotel 1 ------");
// console.log("des_s2_img :", des_s2_img);
// console.log("des_s2_title :", des_s2_title);
// console.log("des_s2_subtitle :", des_s2_subtitle);
// console.log("des_s2_bg :", des_s2_bg);
// console.log("des_s2_pricefrom :", des_s2_pricefrom);
// console.log("des_s2_cta :", des_s2_cta);
// console.log("Screen 3 - Hotel 2 ------");
// console.log("des_s3_img :", des_s3_img);
// console.log("des_s3_title :", des_s3_title);
// console.log("des_s3_subtitle :", des_s3_subtitle);
// console.log("des_s3_bg :", des_s3_bg);
// console.log("des_s3_pricefrom :", des_s3_pricefrom);
// console.log("des_s3_cta :", des_s3_cta);
// console.log("Screen 4 - Hotel 3 ------");
// console.log("des_s4_img :", des_s4_img);
// console.log("des_s4_title :", des_s4_title);
// console.log("des_s4_subtitle :", des_s4_subtitle);
// console.log("des_s4_bg :", des_s4_bg);
// console.log("des_s4_pricefrom :", des_s4_pricefrom);
// console.log("des_s4_cta :", des_s4_cta);