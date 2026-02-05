
        let hora = new Date();
        console.log(hora.toLocaleTimeString());


        let fecha = new Date();
        console.log(fecha.getDay());
        console.log(fecha.getDate());
        console.log(fecha.getMonth());
        console.log(fecha.getFullYear());

        let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        console.log(diaSemana[fecha.getDay()]);

        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        console.log(meses[fecha.getMonth()]);

        console.log('Hoy es ' + diaSemana[fecha.getDay()] + ' ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' del ' + fecha.getFullYear());

   