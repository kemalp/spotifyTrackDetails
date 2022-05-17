const keyConversionList = [
    { 
        mode: 0,
        pitchClass: 0,
        camelotKey: '8B',
        openKey: '1d',
        musicKey: 'C'  
    },
    { 
        mode: 0,
        pitchClass: 1,
        camelotKey: '3B',
        openKey: '8d',
        musicKey: 'C#'  
    },
    { 
        mode: 0,
        pitchClass: 2,
        camelotKey: '10B',
        openKey: '3d',
        musicKey: 'D'  
    },
    { 
        mode: 0,
        pitchClass: 3,
        camelotKey: '5B',
        openKey: '10d',
        musicKey: 'D#'  
    },
    { 
        mode: 0,
        pitchClass: 4,
        camelotKey: '12B',
        openKey: '5d',
        musicKey: 'E'  
    },
    { 
        pitchClass: 5,
        camelotKey: '7B',
        openKey: '12d',
        musicKey: 'F'  
    },
    { 
        mode: 0,
        pitchClass: 6,
        camelotKey: '2B',
        openKey: '7d',
        musicKey: 'F#'  
    },
    { 
        mode: 0,
        pitchClass: 7,
        camelotKey: '9B',
        openKey: '2d',
        musicKey: 'G'  
    },
    { 
        mode: 0,
        pitchClass: 8,
        camelotKey: '4B',
        openKey: '9d',
        musicKey: 'G#'  
    },
    { 
        mode: 0,
        pitchClass: 9,
        camelotKey: '11B',
        openKey: '4d',
        musicKey: 'A'  
    },
    { 
        mode: 0,
        pitchClass: 10,
        camelotKey: '6B',
        openKey: '11d',
        musicKey: 'A#'  
    },
    { 
        mode: 0,
        pitchClass: 11,
        camelotKey: '1B',
        openKey: '6d',
        musicKey: 'B'  
    },
    { 
        mode: 1,
        pitchClass: 0,
        camelotKey: '5A',
        openKey: '10m',
        musicKey: 'Cm'     
    },
    { 
        mode: 1,
        pitchClass: 1,
        camelotKey: '12A',
        openKey: '5m',
        musicKey: 'C#m'  
    },
    { 
        mode: 1,
        pitchClass: 2,
        camelotKey: '7A',
        openKey: '12m',
        musicKey: 'Dm'  
    },
    { 
        mode: 1,
        pitchClass: 3,
        camelotKey: '2A',
        openKey: '7m',
        musicKey: 'D#m'  
    },
    { 
        mode: 1,
        pitchClass: 4,
        camelotKey: '9A',
        openKey: '2m',
        musicKey: 'Em'  
    },
    { 
        mode: 1,
        pitchClass: 5,
        camelotKey: '4A',
        openKey: '9m',
        musicKey: 'Fm'  
    },
    { 
        mode: 1,
        pitchClass: 6,
        camelotKey: '11A',
        openKey: '4m',
        musicKey: 'F#m'  
    },
    { 
        mode: 1,
        pitchClass: 7,
        camelotKey: '6A',
        openKey: '',
        musicKey: ''  
    },
    { 
        mode: 1,
        pitchClass: 8,
        camelotKey: '1A',
        openKey: '11m',
        musicKey: 'Gm'  
    },
    { 
        mode: 1,
        pitchClass: 9,
        camelotKey: '8A',
        openKey: '1m',
        musicKey: 'Am'  
    },
    { 
        mode: 1,
        pitchClass: 10,
        camelotKey: '3A',
        openKey: '8m',
        musicKey: 'A#m'  
    },
    { 
        mode: 1,
        pitchClass: 11,
        camelotKey: '10A',
        openKey: '3m',
        musicKey: 'Bm'  
    }   
]

const returnConversionValue = (_mode, _pitchClass) => {

    const keyConversionResult = keyConversionList.filter(({ mode, pitchClass }) => mode === _mode && pitchClass === _pitchClass)
    
    return (keyConversionResult)
}

export default returnConversionValue