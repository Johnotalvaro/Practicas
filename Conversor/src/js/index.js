function temperatura() {
    const val = document.getElementById("cantidad_temp").value;
    const selectFrom = document.getElementById("Seleccion1_temp");
    const selectTo = document.getElementById("Seleccion2_temp");
    const madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    const madeSelection_2 = selectTo[selectTo.selectedIndex].value;
    let result;

    if (madeSelection_1 == 'Celsius' && madeSelection_2 == 'Celsius') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Celsius' && madeSelection_2 == 'Fahrenheit') {
        result = val * 9 / 5 + 32;
    }
    if (madeSelection_1 == 'Fahrenheit' && madeSelection_2 == 'Fahrenheit') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Fahrenheit' && madeSelection_2 == 'Celsius') {
        result = (val - 32) * 5 / 9;
    }
    document.getElementById("resultado_temp").innerHTML = val + ' grados ' + madeSelection_1 + ' = ' + result.toFixed(2) + ' grados ' + madeSelection_2;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function longitud() {
    const val = document.getElementById("cantidad_long").value;
    const selectFrom = document.getElementById("Seleccion1_long");
    const selectTo = document.getElementById("Seleccion2_long");
    const madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    const madeSelection_2 = selectTo[selectTo.selectedIndex].value;
    let result;

    if (madeSelection_1 == 'Millas' && madeSelection_2 == 'Millas') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Millas' && madeSelection_2 == 'Pies') {
        result = val * 5280;
    }
    if (madeSelection_1 == 'Millas' && madeSelection_2 == 'Pulgadas') {
        result = val * 63360;
    }
    if (madeSelection_1 == 'Millas' && madeSelection_2 == 'Metros') {
        result = val * 1609.34;
    }
    if (madeSelection_1 == 'Pies' && madeSelection_2 == 'Millas') {
        result = val / 5280;
    }
    if (madeSelection_1 == 'Pies' && madeSelection_2 == 'Pies') {
        result = val * 1;
    }
    if (madeSelection_1 == 'pies' && madeSelection_2 == 'Pulgadas') {
        result = val * 12;
    }
    if (madeSelection_1 == 'pies' && madeSelection_2 == 'Metros') {
        result = val * 3.281;
    }
    if (madeSelection_1 == 'Pulgadas' && madeSelection_2 == 'Millas') {
        result = val / 63360;
    }
    if (madeSelection_1 == 'Pulgadas' && madeSelection_2 == 'Pies') {
        result = val / 12;
    }
    if (madeSelection_1 == 'Pulgadas' && madeSelection_2 == 'Pulgadas') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Pulgadas' && madeSelection_2 == 'Metros') {
        result = val / 39.37;
    }
    if (madeSelection_1 == 'Metros' && madeSelection_2 == 'Millas') {
        result = val / 1609;
    }
    if (madeSelection_1 == 'Metros' && madeSelection_2 == 'Pies') {
        result = val * 3.281;
    }
    if (madeSelection_1 == 'Metros' && madeSelection_2 == 'Pulgadas') {
        result = val * 39.37;
    }
    if (madeSelection_1 == 'Metros' && madeSelection_2 == 'Metros') {
        result = val * 1;
    }
    document.getElementById("resultado_long").innerHTML = val + ' ' + madeSelection_1 + ' = ' + result.toFixed(2) + ' ' + madeSelection_2;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function peso() {
    const val = document.getElementById("cantidad_peso").value;
    const selectFrom = document.getElementById("Seleccion1_peso");
    const selectTo = document.getElementById("Seleccion2_peso");
    const madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    const madeSelection_2 = selectTo[selectTo.selectedIndex].value;
    let result;

    if (madeSelection_1 == 'Libras' && madeSelection_2 == 'Libras') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Libras' && madeSelection_2 == 'Kilogramos') {
        result = val / 2.205;
    }
    if (madeSelection_1 == 'Libras' && madeSelection_2 == 'Onzas') {
        result = val * 16;
    }
    if (madeSelection_1 == 'Kilogramos' && madeSelection_2 == 'Libras') {
        result = val * 2.205;
    }
    if (madeSelection_1 == 'Kilogramos' && madeSelection_2 == 'Kilogramos') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Kilogramos' && madeSelection_2 == 'Onzas') {
        result = val * 35.274;
    }
    if (madeSelection_1 == 'Onzas' && madeSelection_2 == 'Libras') {
        result = val / 16;
    }
    if (madeSelection_1 == 'Onzas' && madeSelection_2 == 'Kilogramos') {
        result = val / 35.274;
    }
    if (madeSelection_1 == 'Onzas' && madeSelection_2 == 'Onzas') {
        result = val * 1;
    }
    document.getElementById("resultado_peso").innerHTML = val + ' ' + madeSelection_1 + ' = ' + result.toFixed(2) + ' ' + madeSelection_2;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function velocidad() {
    const val = document.getElementById("cantidad_velo").value;
    const selectFrom = document.getElementById("Seleccion1_velo");
    const selectTo = document.getElementById("Seleccion2_velo");
    const madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    const madeSelection_2 = selectTo[selectTo.selectedIndex].value;
    let result;

    if (madeSelection_1 == 'km/h' && madeSelection_2 == 'km/h') {
        result = val * 1;
    }
    if (madeSelection_1 == 'km/h' && madeSelection_2 == 'mp/h') {
        result = val / 1.609;
    }
    if (madeSelection_1 == 'mp/h' && madeSelection_2 == 'km/h') {
        result = val * 1.609;
    }
    if (madeSelection_1 == 'mp/h' && madeSelection_2 == 'mp/h') {
        result = val * 1;
    }
    document.getElementById("resultado_velo").innerHTML = val + ' ' + madeSelection_1 + ' = ' + result.toFixed(2) + ' ' + madeSelection_2;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function energia() {
    const val = document.getElementById("cantidad_ener").value;
    const selectFrom = document.getElementById("Seleccion1_ener");
    const selectTo = document.getElementById("Seleccion2_ener");
    const madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    const madeSelection_2 = selectTo[selectTo.selectedIndex].value;
    let result;

    if (madeSelection_1 == 'Julios' && madeSelection_2 == 'julios') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Julios' && madeSelection_2 == 'Kilocalorias') {
        result = val / 4148;
    }
    if (madeSelection_1 == 'Julios' && madeSelection_2 == 'Vatios / hora') {
        result = val / 3600;
    }
    if (madeSelection_1 == 'Kilocalorias' && madeSelection_2 == 'julios') {
        result = val * 4148;
    }
    if (madeSelection_1 == 'Kilocalorias' && madeSelection_2 == 'Kilocalorias') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Kilocalorias' && madeSelection_2 == 'Vatios / hora') {
        result = val * 1.162;
    }
    if (madeSelection_1 == 'Vatios / hora' && madeSelection_2 == 'julios') {
        result = val * 3600;
    }
    if (madeSelection_1 == 'Vatios / hora' && madeSelection_2 == 'Kilocalorias') {
        result = val / 1.162;
    }
    if (madeSelection_1 == 'Vatios / hora' && madeSelection_2 == 'Vatios / hora') {
        result = val * 1;
    }
    document.getElementById("resultado_ener").innerHTML = val + ' ' + madeSelection_1 + ' = ' + result.toFixed(2) + ' ' + madeSelection_2;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function volumen() {
    const val = document.getElementById("cantidad_volu").value;
    const selectFrom = document.getElementById("Seleccion1_volu");
    const selectTo = document.getElementById("Seleccion2_volu");
    const madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    const madeSelection_2 = selectTo[selectTo.selectedIndex].value;
    let result;

    if (madeSelection_1 == 'Litros' && madeSelection_2 == 'Litros') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Litros' && madeSelection_2 == 'Onzas Liquidas') {
        result = val * 35.195;
    }
    if (madeSelection_1 == 'Litros' && madeSelection_2 == 'Pies Cúbicos') {
        result = val / 28.317;
    }
    if (madeSelection_1 == 'Onzas Liquidas' && madeSelection_2 == 'Litros') {
        result = val / 35.195;
    }
    if (madeSelection_1 == 'Onzas Liquidas' && madeSelection_2 == 'Onzas Liquidas') {
        result = val * 1;
    }
    if (madeSelection_1 == 'Onzas Liquidas' && madeSelection_2 == 'Pies Cubicos') {
        result = val / 997;
    }
    if (madeSelection_1 == 'Pies Cúbicos' && madeSelection_2 == 'Litros') {
        result = val * 28.317;
    }
    if (madeSelection_1 == 'Pies Cúbicos' && madeSelection_2 == 'Onzas Liquidas') {
        result = val * 997;
    }
    if (madeSelection_1 == 'Pies Cúbicos' && madeSelection_2 == 'Pies Cúbicos') {
        result = val * 1;
    }
    document.getElementById("resultado_volu").innerHTML = val + ' ' + madeSelection_1 + ' = ' + result.toFixed(2) + ' ' + madeSelection_2;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////