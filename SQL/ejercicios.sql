/* 1.	Name of window with AD_Window_ID = ‘100’ */
SELECT * FROM AD_Window WHERE AD_Window_ID = ‘100’
/* 2.	Update window with AD_Window_ID = ‘100’ appending ‘--’ to the name of window with AD_Window_ID = ‘100’ */
	ALTER TABLE AD_Window RENAME TO AD_Window--;
/* 3.	List of all tabs in window with AD_Window_ID = ‘100’ */
SELECT * FROM AD_Window_ID = '100'
/* 4.	List of tab name + field name of all tabs in AD_Window_ID = ‘100’ sorted by tabname and field name */
No he sabido como resolverlo pero usaria el operador logico AND para realizar la lista de nombre de pestaña + nombre de campo de todas las pestañas en AD_Window_ID = '100' y luego ordenarlos con la declaracion ORDER BY
/* 5.	Name and number of tabs of all windows */
SELECT Name, number from windows
/* 6.	List of all windows with its number of fields, sorting by number of fields starting by the windows with a higher number of them */
Esta consulta no he sabido como formularla de forma correcta pero al igual que caso anterior utilizaria el ORDER BY para ordenandolos por número de campos
/* 7.	Windows with more than 5 tabs */
SELECT * FROM Windows where tabs > 5
