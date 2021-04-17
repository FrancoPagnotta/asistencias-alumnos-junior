let cantidad  = prompt("¿Cuantos alumnos son en total?");
let alumnosTotales = []; 

for (i = 0; i < cantidad; i++) { 
    alumnosTotales[i] = [prompt("Por favor, indique el nombre del alumno " + (i+1)),0];                                                               
} 

const tomarAsistencia = (nombre, posicion) => {
    let presente = prompt(nombre); 
    if (presente == "p" || presente == "P") {
        alumnosTotales[posicion][1]++; 
    } 
}

for (i = 0; i < 7; i++) { 
    for (alumno in alumnosTotales) { 
        tomarAsistencia(alumnosTotales[alumno][0], alumno); 
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}<br> 
            Asistencias: ${alumnosTotales[alumno][1]}<br>
             Ausencias: ${7 - alumnosTotales[alumno][1]}
             `; 
    
    if (7 - alumnosTotales[alumno][1] > 4) {
        resultado += " <b>REPROBADO POR INASISTENCIAS</b> <br><br>"; 
    } else {
        resultado += "<br><br>"
    }
    document.write(resultado);
}
