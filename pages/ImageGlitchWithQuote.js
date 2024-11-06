// components/ImageGlitchWithQuote.js

import React, { useState, useEffect } from 'react';
import styles from './ImageGlitchWithQuote.module.css';

const ImageGlitchWithQuote = ({ src, alt, idleSrc, glitchFrames }) => {
    const phrases = [
        "Permita-se fluir com o universo e alcançar suas intenções.",
        "Solte o controle e veja a realidade conspirar ao seu favor.",
        "Você é o criador do seu mundo interno e externo.",
        "A energia flui para onde sua atenção está focada.",
        "Ao soltar, você encontra o verdadeiro poder.",
        "Escolha a realidade que deseja viver.",
        "A incerteza é o seu maior aliado.",
        "O excesso de importância cria resistência.",
        "Tudo acontece no momento certo e da maneira certa.",
        "Aceite o fluxo e permita que sua vida seja fácil.",
        "A realidade é um reflexo dos seus pensamentos.",
        "As intenções puras criam uma realidade favorável.",
        "A liberdade surge ao soltar o medo do fracasso.",
        "Confie que o universo sempre lhe apoia.",
        "Desapegue do controle e confie no processo.",
        "Concentre-se em ser, não em ter.",
        "Tudo o que você precisa já está dentro de você.",
        "Você pode manifestar a vida dos seus sonhos.",
        "O universo é abundante e sempre lhe provê.",
        "A mudança começa na sua consciência.",
        "A realidade é um espelho das suas vibrações.",
        "Tudo o que você busca também busca por você.",
        "Relaxe e permita que o melhor chegue até você.",
        "Viva na certeza de que tudo está a seu favor.",
        "Seus pensamentos são imãs para a sua realidade.",
        "O fluxo da vida está sempre no momento presente.",
        "Solte a importância e a energia fluirá naturalmente.",
        "A verdadeira liberdade está em desapegar.",
        "O que você teme se manifesta mais facilmente.",
        "A energia é moldada pela sua atitude.",
        "Aceite o que é e crie o que pode ser.",
        "As ilusões são apenas limitações temporárias.",
        "O universo responde à sua verdadeira intenção.",
        "Você cria sua própria sorte através do foco.",
        "A realidade é flexível e mutável.",
        "O caminho se desdobra quando você solta o controle.",
        "Viva sem resistência e a vida será mais leve.",
        "Tudo o que você precisa está na simplicidade.",
        "A sua atenção é a chave da criação.",
        "O que você realmente quer está ao seu alcance.",
        "A aceitação abre portas para infinitas possibilidades.",
        "Liberte-se dos padrões para criar sua própria realidade.",
        "O amor e a gratidão elevam sua frequência.",
        "Você é o observador e o criador da sua realidade.",
        "A presença é onde reside o verdadeiro poder.",
        "O universo está sempre respondendo ao seu estado interior.",
        "A verdadeira confiança nasce da entrega total.",
        "O desejo sem apego traz abundância.",
        "A harmonia interior reflete no mundo exterior.",
        "Solte o passado e acolha o presente.",
        "Seja grato por tudo, pois tudo é parte do seu caminho."
    ];

    // Seleciona uma frase aleatória ao carregar a página
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isIdle, setIsIdle] = useState(true);
    const glitchCycles = 2;
    
    const [randomPhrase, setRandomPhrase] = useState("");
    useEffect(()=>{
        setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    },[])
    useEffect(() => {

        let glitchCount = 0;

        const interval = setInterval(() => {
            if (isIdle) {
                setIsIdle(false);
            } else {
                setCurrentFrame((prevFrame) => (prevFrame + 1) % glitchFrames.length);
                glitchCount++;

                if (glitchCount >= glitchFrames.length * glitchCycles) {
                    setIsIdle(true);
                    glitchCount = 0;
                }
            }
        }, 250);

        return () => clearInterval(interval);
    }, [isIdle, glitchFrames.length, glitchCycles]);

    return (
        <div className={styles.container}>
            <div className={styles.glitchContainer}>
                {!isIdle ? (
                    <img src={glitchFrames[currentFrame]} alt={alt} className={`${styles.glitchImage} ${styles.glitchFrame}`} />
                ):(
                    <img src={isIdle ? idleSrc : src} alt={alt} className={styles.glitchImage} />
                )}
            </div>
            <p className={styles.glitchText}>{randomPhrase}</p>
        </div>
    );
};

export default ImageGlitchWithQuote;
