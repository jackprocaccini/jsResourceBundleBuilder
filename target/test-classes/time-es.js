define({
    /*
     * NOTE: this file is only for translations that are specific to flex time;
     * if you have translations that could be used across (sub)applications,
     * add them to core-en.js instead of here
     */

    // Customizable dashboard tile titles
    'app.time.customDash.tiles.punchClock.title': 'Reloj de Fichar',

    // Stage
    'app.time.header': 'Tiempo y asistencia',
    'app.time.employee.tabs.clock.label': 'Vista General',
    'app.time.employee.tabs.schedule.label': 'Programar',
    'app.time.employee.tabs.calendar.label': 'Calendario',
    'app.time.employee.tabs.reports.label': 'Informes',
    'app.time.employee.stage.accessNeeded': 'Acceso necesario',
    'app.time.employee.stage.noMobileAccess': 'No pareces tener acceso móvil de Tiempo y Asistencia. Su administrador puede ayudar.',

    // Shared across multiple components
    'app.time.unassigned': 'Sin Asignar',
    'app.time.clockIn': 'Reloj en',
    'app.time.clockOut': 'Reloj fuera',
    'app.time.Work': 'Trabajo',
    'app.time.Working': 'Trabajando',
    'app.time.Meal': 'Comida',
    'app.time.Break': 'Descanso',
    'app.time.Transfer': 'Transferir',
    'app.time.JobCosting': 'Job Costing',
    'app.time.LaborDistribution': 'Labor Distribution',
    'app.time.ChangesNotSaved': 'Los cambios no pueden ser guardados. Por favor intente nuevamente.',
    'app.time.Close': 'Cerrar',
    'app.time.loadmore.button.text': 'Obtener más',

    //employee punch widget status
    'app.time.employee.punchwidget.status.clockIn': 'Trabajando desde',
    'app.time.employee.punchwidget.status.clockOut': 'Salida marcada',
    'app.time.employee.punchwidget.status.beginMeal': 'Comida desde',
    'app.time.employee.punchwidget.status.beginBreak': 'Descanso desde',

    //employee punch widget tooltip
    'app.time.employee.punchwidget.tooltip.clockIn': 'Reloj en',
    'app.time.employee.punchwidget.tooltip.clockOut': 'Reloj fuera',
    'app.time.employee.punchwidget.tooltip.beginMeal': 'Comenzar comida',
    'app.time.employee.punchwidget.tooltip.endMeal': 'Fin de la comida',
    'app.time.employee.punchwidget.tooltip.beginBreak': 'Comenzar descanso',
    'app.time.employee.punchwidget.tooltip.endBreak': 'Termine descanso',
    'app.time.employee.punchwidget.tooltip.transfer': 'Transferir',
    'app.time.employee.punchwidget.tooltip.callBack': 'Llamar de vuelta',

    //employee punch widget, other
    'app.time.employee.punchwidget.tooltip.edit': 'Editar',
    'app.time.employee.punchwidget.tooltip.note': 'Nota',
    'app.time.employee.punchwidget.moreoptions': 'Mas opciones',

    //employee Labor Level JCLD Picker Drawer
    'app.time.employee.drawers.laborLevelPickerDrawer.drawerTitle': 'Editar detalles',
    'app.time.employee.drawers.laborLevelPickerDrawer.cancelbutton': 'Cancelar',
    'app.time.employee.drawers.laborLevelPickerDrawer.savebutton': 'Guardar',
    'app.time.employee.drawers.laborLevelPickerDrawer.cardTitle': 'Detalles actuales del trabajo',
    'app.time.employee.drawers.laborLevelPickerDrawer.laborLevelPicker.label': 'Org',
    'app.time.employee.drawers.laborLevelPickerDrawer.alertstrong': 'Elige Detalles',
    'app.time.employee.drawers.laborLevelPickerDrawer.alertnormaltext': 'Confirme que se hayan asignado los detalles de trabajo adecuados.',

    //geolocation service
    'app.time.shared.js.services.geolocation': 'No estamos seguros de dónde estás. Para realizar una acción, habilite el seguimiento de ubicación en su dispositivo.',

    //employee punch prompt drawer
    'app.time.employee.drawers.punchPromptDrawer.drawerTitle': 'Indicaciones de acción',
    'app.time.employee.drawers.punchPromptDrawer.cancelbutton': 'Cancelar',
    'app.time.employee.drawers.punchPromptDrawer.alertStrong': 'Detente.',
    'app.time.employee.drawers.punchPromptDrawer.alertNormalText': 'Responda las siguientes preguntas antes de continuar.',
    'app.time.employee.drawers.punchPromptDrawer.cardTitle': 'Preguntas',
    'app.time.employee.drawers.punchPromptDrawer.requiredField': 'Esta información es requerida.',
    'app.time.employee.drawers.punchPromptDrawer.invalidNumber': 'Por favor ingrese un número valido.',
    'app.time.employee.drawers.punchPromptDrawer.invalidDate': 'Por favor introduzca una fecha valida.',

    //My Schedule Card
    'app.time.employee.myScheduleCard.cardTitle': 'Mi Horario',
    'app.time.employee.myScheduleCard.noDataDescription': 'No tienes nada planeado para este día. Avanza y conquista.',
    'app.time.employee.myScheduleCard.postShift.button.text': 'Publique turno',
    'app.time.employee.myScheduleCard.cancelPostedShift.button.text': 'Cancelar turno publicado',
    'app.time.employee.myScheduleCard.postSuccessfulMessage.one': 'Publicación pendiente. Tu turno publicado para ',
    'app.time.employee.myScheduleCard.postSuccessfulMessage.two': ' está esperando la aprobación del gerente.',
    'app.time.employee.myScheduleCard.postAutoApproveSuccessfulMessage.one': '¡Publicación exitosa! Tu turno publicado para ',
    'app.time.employee.myScheduleCard.postAutoApproveSuccessfulMessage.two': ' ha sido publicado y ahora está disponible para que alguien lo tome.',
    'app.time.employee.myScheduleCard.postSuccessfulMessage.multipleShifts.one': 'Publicación pendiente. Tus turnos publicados para ',
    'app.time.employee.myScheduleCard.postSuccessfulMessage.multipleShifts.two': ' están esperando la aprobación del gerente.',
    'app.time.employee.myScheduleCard.postAutoApproveSuccessfulMessage.multipleShifts.one': '¡Publicación exitosa! Tus turnos publicados para ',
    'app.time.employee.myScheduleCard.postAutoApproveSuccessfulMessage.multipleShifts.two': ' han sido publicados y ahora están disponibles para que alguien los tome.',
    'app.time.employee.myScheduleCard.postUnsuccessfulMessage': 'Algo salió mal. Inténtalo de nuevo.',
    'app.time.employee.myScheduleCard.schedulePostedInformationMessage': 'Este cambio se ha publicado y se eliminará de su calendario una vez que alguien lo recoja. Hasta entonces, todavía estás programado para trabajar.',
    'app.time.employee.myScheduleCard.cancelPostedShiftSuccessMessage': 'Publicación cancelada. Su turno publicado ya no se puede tomar y aún permanece en su calendario.',

    // Classic info alert
    'app.time.employee.tab.classic.alertStrong': '¿Sabías?',
    'app.time.employee.tab.classic.alertNormalText': 'Siempre estamos actualizando Flex Time, pero algunas características aún no están disponibles en esta versión, como hojas de tiempo e informes. Abra nuestra versión clásica para estas características.',
    'app.time.employee.tab.classic.alert.button.makeMyDefault': 'Hacer esto mi predeterminado',
    'app.time.employee.tab.classic.alert.button.makeClassicDefault': 'Hacer Clásico mi predeterminado',

    // Switch to classic button
    'app.time.employee.tab.button.switchToClassic': 'Cambiar a Clásico',

    // Employee calendar
    'app.time.employee.employeecalendar.timeOffTitle': 'Vacaciones/Descanso',
    'app.time.employee.employeecalendar.availableShiftTitle': 'Turno disponible',
    'app.time.employee.employeecalendar.availableShiftToolTipText': 'Uno o más turnos están disponibles para ser recogidos',
    'app.time.employee.employeecalendar.blackoutTitle': 'Jornada Obligatoria',
    'app.time.employee.employeecalendar.holidayTitle': 'Feriado/Festivo',
    'app.time.employee.employeeCalendar.noDescription': 'Sin descripción',
    'app.time.employee.employeecalendar.pendingTimeOff': 'Vacaciones/Descanso Pendientes',
    'app.time.employee.employeecalendar.approvedTimeOff': 'Vacaciones/Descanso Aprobadas',
    'app.time.employee.employeecalendar.blackoutDate': 'Fecha de Jornada Obligatoria',
    'app.time.employee.employeecalendar.scheduledShiftFooterText': 'Programar',
    'app.time.employee.employeecalendar.ClockInTitle': 'Reloj en',
    'app.time.employee.employeecalendar.ClockOutTitle': 'Reloj fuera',
    'app.time.employee.employeecalendar.personalcalendarsettings': 'Configuraciones de calendario personal',

    // Agenda View
    'app.time.employee.agenda.myAgendaTitle': 'Mi Agenda',
    'app.time.employee.agenda.viewFullCalendarTitle': 'Ver todo el calendario',
    'app.time.employee.agenda.noEventsTitle': 'No tienes nada planeado en un futuro cercano.',

    /*
     *  Time Card
     */

    // Time Card Grid
    'app.time.employee.timecard.timecard': 'Tarjeta de Tiempo',
    'app.time.employee.timecard.date': 'Fecha',
    'app.time.employee.timecard.punchtype': 'Tipo', //Needs Translation
    'app.time.employee.timecard.inout': 'Entrada / Salida', //Needs Translation
    'app.time.employee.timecard.timein': 'Entrada',
    'app.time.employee.timecard.timeout': 'Salida',
    'app.time.employee.timecard.totalhours': 'Total de Horas',
    'app.time.employee.timecard.error': 'ERROR',
    'app.time.employee.timecard.regular': 'Regular',
    'app.time.employee.timecard.current': 'Actual',
    'app.time.employee.timecard.week': 'Semana',
    'app.time.employee.timecard.period': 'Período',
    'app.time.employee.timecard.unpaid': 'No Pagado',
    'app.time.employee.timecard.non-work': 'No Trabajo',
    'app.time.employee.timecard.overtime': 'Los Horas Extra',
    'app.time.employee.timecard.adjmt': 'Ajustes',
    'app.time.employee.timecard.noresults': 'No se encontraron resultados',
    'app.time.employee.timecard.noresultsmessage': 'Para mejores resultados, intente cambiar las fechas.',
    'app.time.employee.timecard.approved': 'Aprobado',
    'app.time.employee.timecard.unapproved': 'No Aprobado',
    'app.time.employee.timecard.approveall': 'Aprobar Todo',
    'app.time.employee.timecard.approvalsubmittedtoast': 'El estado de tu solicitud ha sido almacenado.',
    'app.time.employee.timecard.options': 'Opciones',
    'app.time.employee.timecard.add': 'Añadir',
    'app.time.employee.timecard.managerapproved': 'Jefe Aprobado',
    'app.time.employee.timecard.edittimecard': 'Cambiar Tarjeta de Tiempo',

    //TimeCardDrawer
    'app.time.employee.timecarddrawer.missingpunch': 'Jornada no registrada!',
    'app.time.employee.timecarddrawer.missingpunches': 'Multiplé jornadas no registradas!',
    'app.time.employee.timecarddrawer.tofixcontactmanager': 'Para solucionar esto, por favor contacta a tu jefé.',
    'app.time.employee.timeCardDrawer.timepunched': 'What time should you have punched?',
    'app.time.employee.timecarddrawer.tofixpleasecorrect': 'Para solucionar esto, por favor ingresa la información valida de tu jornada.',
    'app.time.employee.timecarddrawer.tofixmultiple': 'Por favor verifiqué todas jornadas no registradas antes de guardar.',
    'app.time.employee.timecarddrawer.date': 'Fecha:',
    'app.time.employee.timecarddrawer.time': 'Hora:',
    'app.time.employee.timecarddrawer.approveday': 'Aprobar Dia',
    'app.time.employee.timecarddrawer.yourpunchsavedfor': 'La información ha sido almacenada para',
    'app.time.employee.timecarddrawer.change': 'Cambiar',

    // TimeSheetGrid
    'app.time.employee.timesheet.outsiderangetitle': 'Fuera del rango especificado',
    'app.time.employee.timesheet.outsiderangemessage': 'El periodo de pago para las fechas selecionadas no esta configurado. Por favor contacta a el/la Administrador(a).',
    'app.time.employee.timesheet.addentry': 'Nueva Entrada',
    'app.time.employee.timesheet.hours': 'Horas',
    'app.time.employee.timesheet.useValidFormat' : 'Por favor use un formato válido',

    // Pay Adjustment Drawers
    'app.time.employee.payadjustmentdrawer.tabs.history': 'Historia',
    'app.time.employee.payadjustmentdrawer.tabs.history.noresultsmessage': 'No existen ajustes de pago registrados para la fecha seleccionada.',
    'app.time.employee.payadjustmentdrawer.tabs.add.datepicker': 'Selecciona la fecha?',
    'app.time.employee.payadjustmentdrawer.tabs.add.datepicker.valid': 'Usa un formato valido',
    'app.time.employee.payadjustmentdrawer.tabs.add.datepicker.validmin': 'Escoge una fecha antes o despues de',
    'app.time.employee.payadjustmentdrawer.tabs.add.type': 'Que tipo de ajuste estas añadiendo?',
    'app.time.employee.payadjustmentdrawer.tabs.add.type.select': 'Seleciona uno',
    'app.time.employee.payadjustmentdrawer.tabs.add.rate': 'Tarifa',
    'app.time.employee.payadjustmentdrawer.tabs.add.amount': 'Cantidad',
    'app.time.employee.payadjustmentdrawer.tabs.add.total': 'Total',
    'app.time.employee.payadjustmentdrawer.tabs.add.noactivetypes': 'No existen tipos activos',
    'app.time.employee.payadjustmentdrawer.tabs.add.amount.error.min': 'Valor minimo',
    'app.time.employee.payadjustmentdrawer.tabs.add.amount.error.max': 'Valor máximo',
    'app.time.employee.payadjustmentdrawer.tabs.detail.type': 'Tipo',
    'app.time.employee.payadjustmentdrawer.tabs.add.outside.date.range.header': 'Confirmando los datos.',
    'app.time.employee.payadjustmentdrawer.tabs.add.outside.date.range.one': 'La información que recibimos fue para ',
    'app.time.employee.payadjustmentdrawer.tabs.add.outside.date.range.two': ', pero tu tarjeta es para ',
    'app.time.employee.payadjustmentdrawer.tabs.add.outside.date.range.three': '. Estas seguro que este cambio?',
    'app.time.employee.payadjustmentdrawer.tabs.add.adjustmentsuccessfullysubmitted': 'Ajuste almacenado exitosamente.',
    'app.time.employee.payadjustmentdrawer.tabs.add.adjustmentsuccessfullyDeleted': 'Ajuste eliminado con éxito.',
    'app.time.employee.payadjustmentdrawer.tabs.delete.confirmation.header': '¿Estás seguro?',
    'app.time.employee.payadjustmentdrawer.tabs.delete.confirmation': '¿Desea eliminar este ajuste?  Este cambio no se puede revetir.',

    // Others Time Off Details
    'app.time.employee.otherstimeoffdetails.cardtitle': 'Dia libre',

    // Common Calendar Details Translations
    'app.time.employee.calendardetails.startedon.text': 'Comenzó',
    'app.time.employee.calendardetails.at.text': 'a las',
    'app.time.employee.calendardetails.others.text': 'otros',

    // Approval ack dialog
    'app.time.employee.timecard.ack.acknowledgement': 'Admisión',
    'app.time.employee.timecard.ack.cancel': 'Cancelo',
    'app.time.employee.timecard.ack.ok': 'Aprobado',

    // Calendar Integration Drawer
    'app.time.employee.drawers.calendarIntegrationDrawer.drawerTitle': 'Sincronización del calendario',
    'app.time.employee.drawers.calendarIntegrationDrawer.topSectionHeader': 'Actualice su configuración de calendario personal',
    'app.time.employee.drawers.calendarIntegrationDrawer.topSectionDescription': 'Manténgase actualizado compartiendo su horario y los cambios de agenda con su propio calendario',
    'app.time.employee.drawers.calendarIntegrationDrawer.bottomSectionHeader': '¿Con cuál calendario quieres sincronizar?',
    'app.time.employee.drawers.calendarIntegrationDrawer.syncOptionsHeader': 'Elige qué datos quieres sincronizar:',
    'app.time.employee.drawers.calendarIntegrationDrawer.syncOptionScheduleTitle': 'Horarios',
    'app.time.employee.drawers.calendarIntegrationDrawer.syncOptionTimeOffTitle': 'Tiempo libre',
    'app.time.employee.drawers.calendarIntegrationDrawer.saveButtonTitle': 'Guardar',
    'app.time.employee.drawers.calendarIntegrationDrawer.registerButtonTitle': 'Registro',
    'app.time.employee.drawers.calendarIntegrationDrawer.unregisterButtonTitle': 'Anular el registro',
    'app.time.employee.drawers.calendarIntegrationDrawer.successfulRegistrationMessage': 'Te has registrado correctamente para la sincronización del calendario',
    'app.time.employee.drawers.calendarIntegrationDrawer.successfulUnregistrationMessage': 'No se ha registrado correctamente en la sincronización del calendario',
    'app.time.employee.drawers.calendarIntegrationDrawer.successfulSaveMessage': 'Se guardo correctamente',
    'app.time.employee.drawers.calendarIntegrationDrawer.resyncRequiredMessage': 'Nota: hemos sincronizado algunos elementos que no se sincronizaron con su cuenta.',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.password.label': 'Contraseña específica de la aplicación',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.email.label': 'Email',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.signInLink': 'Inicia sesión para generar contraseña',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.headsUp': '¡Aviso! ',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.description': 'Apple iCal requiere que generes una "contraseña específica de la aplicación" para sincronizar tu calendario. Para hacerlo, inicie sesión en su cuenta de Apple y en la sección de seguridad, haga clic en "Generar contraseñas". Una vez que haya hecho eso, pegue la contraseña a continuación junto con la dirección de correo electrónico registrada en su cuenta de Apple.',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.emailAddressIsRequired.label': 'Correo electronico es requerido.',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.invalidEmailAddress.label': 'Dirección de correo electrónico no válida.',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.passwordRequired.label': 'Se requiere contraseña.',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.errorOccurredPleaseTryAgain.label': 'Ocurrió un error. Inténtalo de nuevo.',
    'app.time.employee.drawers.calendarIntegrationDrawer.appleUserVerification.authenticationFailed': 'Su correo electrónico o contraseña específica de la aplicación no es válida. Anule el registro e intente nuevamente.',
    'app.time.employee.drawers.calendarIntegrationDrawer.oauth.authorize': 'Registrarse',
    'app.time.employee.drawers.calendarIntegrationDrawer.oauth.completeRegistrationMessage': 'Haga clic en iniciar sesión para completar su registro.',

    // Apple Verification Prompt
    'app.time.employee.dialogs.appleVerificationPrompt.title': 'Código de verificación',
    'app.time.employee.dialogs.appleVerificationPrompt.description': 'Se acaba de enviar un código único a su dirección de correo electrónico. Ingrese el código a continuación para completar el proceso de registro.',
    'app.time.employee.dialogs.appleVerificationPrompt.button.cancel': 'Cancelar',
    'app.time.employee.dialogs.appleVerificationPrompt.button.validate': 'Validar',
    'app.time.employee.dialogs.appleVerificationPrompt.token': 'Introduzca el código',
    'app.time.employee.dialogs.appleVerificationPrompt.resendLink': 'Reenviar codigo',
    'app.time.employee.dialogs.appleVerificationPrompt.errorMessage': 'El código que proporcionó no es válida. Por favor revise el correo electrónico que le fue enviado.',
    'app.time.employee.dialogs.appleVerificationPrompt.authErrorMessage': 'Su correo electrónico o contraseña específica de la aplicación no es válida. Verifique la información de su cuenta e intente nuevamente.',
    'app.time.employee.dialogs.appleVerificationPrompt.resendTokenError': 'Ocurrió un error. Inténtalo de nuevo.',
    'app.time.employee.dialogs.appleVerificationPrompt.resendTokenSuccess': 'Se ha enviado un nuevo código de una sola vez.',

    // PTO Widget
    'app.time.employee.pto.widget.title.timeOff': 'Tiempo Libre',
    'app.time.employee.pto.widget.viewDetails': 'Ver Detalles',
    'app.time.employee.pto.widget.viewAll': 'Ver Todos',
    'app.time.employee.pto.widget.hiddenBalances': 'Los balances se han escondido',
    'app.time.employee.pto.widget.showBalances': 'Mostrar balances',
    'app.time.employee.pto.widget.units.days': 'días',
    'app.time.employee.pto.widget.units.day': 'día',
    'app.time.employee.pto.widget.units.hours': 'horas',
    'app.time.employee.pto.widget.units.hour': 'hora',
    'app.time.employee.pto.widget.units.units': 'unidades',
    'app.time.employee.pto.widget.units.unit': 'unidad',

    // PTO Drawer
    'app.time.employee.pto.drawer.summary': 'Resumen',
    'app.time.employee.pto.drawer.type':'Tipo',
    'app.time.employee.pto.drawer.timeOffBalances': 'Balance de tiempo libre',
    'app.time.employee.pto.drawer.availableBalance':'Balance disponible',
    'app.time.employee.pto.drawer.earned':'Ganado',
    'app.time.employee.pto.drawer.used':'Consumido',
    'app.time.employee.pto.drawer.eligibleForBuyout': 'Elegible para comprar',
    'app.time.employee.pto.drawer.summary.requestTimeOff.button.timeOff': 'Pedir tiempo libre',
    'app.time.employee.pto.drawer.summary.requestTimeOff.button.buyout': 'Solicitar compra',
    'app.time.employee.pto.drawer.summary.requestTimeOff.text': 'Todos necesitamos algo de tiempo libre. Inicie su pedido aquí y consulte periódicamente por cambios en la aprobación.',
    'app.time.employee.pto.drawer.summary.requestTimeOff.title': 'Pedidos de tiempo libre',
    'app.time.employee.pto.drawer.requests.title': 'Pedidos',
    'app.time.employee.pto.drawer.requests.request': 'Pedido(s)',
    'app.time.employee.pto.drawer.requests.buyoutRequestTag': '$ Compra',
    'app.time.employee.pto.drawer.requests.status': 'Estado',
    'app.time.employee.pto.drawer.requests.units': 'Unidades',
    'app.time.employee.pto.drawer.requests.search.placeholder': 'Buscar',
    'app.time.employee.pto.drawer.requests.filterSelector.upcoming': 'Próximos',
    'app.time.employee.pto.drawer.requests.filterSelector.history': 'Historial',
    'app.time.employee.pto.drawer.requests.noRequest.title': 'Nada que ver aquí.',
    'app.time.employee.pto.drawer.requests.noRequest.text': 'No hay solicitudes de tiempo libre.',
    'app.time.employee.pto.drawer.requests.requestTimeOff': 'Pedir tiempo libre',
    'app.time.employee.pto.drawer.requests.search.noResult.title': '0 resultados.',
    'app.time.employee.pto.drawer.requests.search.noResult.text': 'Buscamos y buscamos. Trata de expandir tu busqueda.',
    'app.time.employee.pto.drawer.requests.loadMore': 'Cargar más',
    'app.time.employee.pto.drawer.requests.status.Requested': 'Pendiente',
    'app.time.employee.pto.drawer.requests.status.CancellationRequested': 'Cancelar Pendiente',
    'app.time.employee.pto.drawer.requests.status.Approved': 'Aprobado',
    'app.time.employee.pto.drawer.requests.status.PartiallyApproved': 'Aprobado Parcialmente',
    'app.time.employee.pto.drawer.requests.status.CancellationPartiallyApproved': 'Actualizado',
    'app.time.employee.pto.drawer.requests.status.Denied': 'Denegado',
    'app.time.employee.pto.drawer.requests.status.CancellationApproved': 'Cancelado',
    'app.time.employee.pto.drawer.requests.status.CancellationDenied': 'Cancelación Denegada',

    // PTO Submit Request Drawer
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.title': 'Pedir tiempo libre',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.subtitle': 'Pedido',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.selectedType': 'Tipo',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.dateRange.enterDate': 'Selecione una fecha',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.request.button.submit': 'Enviar',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.total': 'Total',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.submitted.text': 'Su pedido de tiempo libre ha sido enviado exitosamente. Puede chequear el estado del pedido en la pestaña Pedidos',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.rangeCreator.hoursMax': 'Por favor, limite a 24 horas.',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.rangeCreator.daysMax': 'Por favor, limite a 1 día.',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.rangeCreator.startTime': 'Hora de Inicio',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.notes.placeholder': 'Puede agregar una nota a esta solicitud',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.inline.error.title': 'Solicitud inválida.',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.inline.error.message': 'Por favor revísela e inténtelo de nuevo.',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.warning.one.year.future.title': '¡Vamos a revisar!',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.warning.one.year.future.message': 'Ha seleccionado una fecha que tiene más de un año en el futuro. Sólo queremos asegurarnos de que esto no sea un accidente. Si no, ¡continúe!',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.from': 'Desde',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.to': 'Hasta',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.valid': 'El valor ingresado no es una fecha',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.required': 'La fecha es requerida',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.mindate': 'La fecha es demasiado temprana',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.maxdate': 'La duración no puede exceder los 180 días.',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.requestTimeOff.dateRange.enterDate': 'Selecione una fecha',
    'app.time.employee.pto.drawer.PTOSubmitRequestDrawer.submitted.text': 'Su pedido de tiempo libre ha sido enviado exitosamente. Puede chequear el estado del pedido en la pestaña Pedidos.',

    // PTO Submit Buyout Drawer
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.title': 'Solicitud de Compra',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.label.buyout': 'Compra',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.type.selector': 'Tipo de Tiempo Libre',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.label.projectedBuyoutBalance': 'Balance del período:',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.label.endBalance': 'Balance Final:',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.label.availableBuyoutBalance': 'Elegible para comprar:',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.label.cashValue': 'Valor en efectivo',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.submitted.text': 'Su solicitud de compra ha sido enviado exitosamente. Puede chequear el estado del pedido en la pestaña Pedidos.',
    'app.time.employee.pto.drawer.PTOSubmitBuyoutDrawer.requestBuyout.amount.error.max': 'Por favor, limite a {0} ',

    // PTO Drawer Shared
    'app.time.employee.pto.drawer.shared.select.type': 'Seleccione un tipo',
    'app.time.employee.pto.drawer.shared.amount.error.required': 'Por favor, ingrese un número válido.',
    'app.time.employee.pto.drawer.shared.amount.error.min': 'Por favor, ingrese un número positivo.',
    'app.time.employee.pto.drawer.shared.amount.error.pattern': 'Por favor, limite a 2 decimales.',
    'app.time.employee.pto.drawer.shared.notes.label': 'Nota',
    'app.time.employee.pto.drawer.shared.notes.error.maxLength': 'La nota debe ser menor que 250 caracteres',
    'app.time.employee.pto.drawer.shared.notes.error.invalidCharacteres': 'La nota no puede contener los siguientes caracteres: " \' % * ; < = > +',
    'app.time.employee.pto.drawer.shared.submitted.title': 'Enviado para su Aprobación',
    'app.time.employee.pto.drawer.shared.submitted.link': 'Empezar un Nuevo Pedido',
    'app.time.employee.pto.drawer.shared.submitted.error.sorry.title': 'Lo siento por eso...',
    'app.time.employee.pto.drawer.shared.submitted.unknown.error.message': 'No estamos seguros si se ha realizado su solicitud de cancelación. Verifique su pestaña de solicitudes actuales para ver si la solicitud fue cancelada exitosamente.',
    'app.time.employee.pto.drawer.shared.submitted.viewMyRequest.text': 'Ver Mis Solicitudes',

    // PTO Custom Messages
    'app.time.employee.pto.customMessage.dateRangeTooLong.title': 'Solicitando {0} días',
    'app.time.employee.pto.customMessage.dateRangeTooLong.confirm': '¿Está seguro?',
    'app.time.employee.pto.customMessage.dateRangeTooLong.abort': 'Reintentar',
    'app.time.employee.pto.customMessage.dateRangeTooLong.continue': 'Si, estoy seguro',
    'app.time.employee.pto.customMessage.cancelRequest.title': '¿Está seguro?',
    'app.time.employee.pto.customMessage.cancelRequest.abort': 'Mantener',
    'app.time.employee.pto.customMessage.cancelRequest.continue': 'Cancelar',

    // Other Employee Schedule Details Component
    'app.time.employee.otheremployeescheduledetails.cardtitle': 'Programado',
    'app.time.employee.otheremployeescheduledetails.requestButton': 'Solicitar',
    'app.time.employee.otheremployeescheduledetails.cancelButton': 'Cancelar el turno solicitado',
    'app.time.employee.otheremployeescheduledetails.org.text': 'Org',
    'app.time.employee.otheremployeescheduledetails.estWage.text': 'Salario Est.',
    'app.time.employee.otheremployeescheduledetails.shiftAvailable.text': 'Disponible',
    'app.time.employee.otheremployeescheduledetails.shiftRequestPending.text': 'Pendiente',
    'app.time.employee.otheremployeescheduledetails.calculate.text': 'Calcular',
    'app.time.employee.otheremployeescheduledetails.inlineNotificationTitle.overlappingShift': 'Programar conflicto.',
    'app.time.employee.otheremployeescheduledetails.inlineNotificationDescription.overlappingShift': 'El turno que intentaste tomar se superpone con tu horario actual.',
    'app.time.employee.otheremployeescheduledetails.inlineNotificationTitle.llMismatch': 'No elegible.',
    'app.time.employee.otheremployeescheduledetails.inlineNotificationDescription.llMismatch': 'No eres elegible para trabajar este turno. Consulta a tu gerente si tienes alguna pregunta.',
    'app.time.employee.otheremployeescheduledetails.inlineNotificationTitle.genericError': 'Lo siento por eso.',
    'app.time.employee.otheremployeescheduledetails.inlineNotificationDescription.genericError': 'Algo salió mal. Inténtalo de nuevo.',
    'app.time.employee.otheremployeescheduledetails.requestShiftSuccessMessage': 'Pedido pendiente. El turno aparecerá en tu horario una vez que sea aprobado.',
    'app.time.employee.otheremployeescheduledetails.cancelRequestedShiftSuccessMessage': 'Éxito! Tu solicitud para retomar este turno ha sido cancelada.',

    // Post Scheduled Shift Prompt
    'app.time.employee.dialogs.postScheduledShiftPrompt.singleShift.title': 'Publique Turno',
    'app.time.employee.dialogs.postScheduledShiftPrompt.multipleShifts.title': 'Elija Turno Para Publicar',
    'app.time.employee.dialogs.postScheduledShiftPrompt.singleShift.description': 'Confirme los detalles de su turno, deje una nota para su gerente y luego estará listo',
    'app.time.employee.dialogs.postScheduledShiftPrompt.multipleShifts.description': 'Parece que estás programado para varios turnos. Seleccione uno o más, deje una nota para su gerente y estará listo.',
    'app.time.employee.dialogs.postScheduledShiftPrompt.button.cancel': 'Cancelo',
    'app.time.employee.dialogs.postScheduledShiftPrompt.button.postShift': 'Publique turno',
    'app.time.employee.dialogs.postScheduledShiftPrompt.managerNoteTitle': 'Nota para el gerente',
    'app.time.employee.dialogs.postScheduledShiftPrompt.shift.label': 'Turno',
    'app.time.employee.dialogs.postScheduledShiftPrompt.note.label': 'Nota'

});
