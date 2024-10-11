## Comandos CLI de nest

- Ver comandos de ayuda
nest --help

- Crear proyecto
nest new <project-name>

- Ejecutar servidor en modo de desarrollo
npm run start:dev

- Crear modulo
nest g mo <module-name>

- Crear controlador
nest g co <module-name>

- Crear servicio
nest g s <service-name>

NOTA: Usar el prefijo --no-spec para que no cree los archivos de pruebas

## Template de editorconfig para proyectos nest
root = true

[*.{js,ts}]
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2

[*.json]
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2


- Generar build de produccion basico

```bash
nest build
```

- Ejecutar en modo de produccion
```bash
npm run start:prod
```
