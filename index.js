import fs from 'fs'
import chalk from 'chalk'
import { waitForDebugger } from 'inspector'

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'))
}

// Função sincrona que irá realizar o que é esperado porém podendo gerar problemas com a demora na execução em algum ponto da mesma
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro){
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

// Utilizando codigo assincrono, utilizando as promisses do javascript juntamente com o then e o catch
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }

// Utilizando codigo asssincrono porém, utilizando a forma mais moderna do javascript o async e o await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    } catch(error) {
        trataErro(error)
    }
}

pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')