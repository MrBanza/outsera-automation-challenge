@echo off

:: Diretório do projeto
set PROJECT_DIR=%~dp0
set K6_SCRIPT=%PROJECT_DIR%k6\testLoad.js
set REPORTS_DIR=%PROJECT_DIR%reports
set JSON_REPORT=%REPORTS_DIR%\result.json
set HTML_REPORT=%REPORTS_DIR%\result.html

:: Criar diretório de reports se não existir
if not exist "%REPORTS_DIR%" mkdir "%REPORTS_DIR%"

:: Executar o teste de performance com K6 e salvar o relatório em JSON
echo Executando testes de performance com K6...
k6 run "%K6_SCRIPT%" --out json="%JSON_REPORT%"

:: Verificar se o relatório JSON foi gerado
if exist "%JSON_REPORT%" (
    echo Relatório JSON gerado em %JSON_REPORT%
    
    :: Gerar relatório HTML
    echo Gerando relatório HTML...
    k6 run "%K6_SCRIPT%" --summary-export="%HTML_REPORT%"
    
    if exist "%HTML_REPORT%" (
        echo Relatório HTML gerado em %HTML_REPORT%
    ) else (
        echo Erro ao gerar relatório HTML. Verifique a execução.
    )
) else (
    echo Erro ao gerar relatório JSON. Verifique a execução do K6.
)

pause
