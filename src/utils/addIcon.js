import armsLogo from '../assets/icons/armsLogo.png'
import legsLogo from '../assets/icons/legsLogo.png'
import chestLogo from '../assets/icons/chestLogo.png'
import shouldersLogo from '../assets/icons/shouldersLogo.png'
import backLogo from '../assets/icons/backLogo.png'
import cardioLogo from '../assets/icons/cardioLogo.png'
import neckLogo from '../assets/icons/chestLogo.png'
import waistLogo from '../assets/icons/waistLogo.png'
import allLogo from '../assets/icons/allLogo.png'


export const addIcon = (item) => {
    let icon
    switch(item) {
        case 'upper arms' :
            icon = armsLogo
            break
        case 'lower arms' :
            icon = armsLogo
            break
        case 'upper legs' :
            icon = legsLogo
            break
        case 'lower legs' :
            icon = legsLogo
            break
        case 'back' :
            icon = backLogo
            break
        case 'chest' :
            icon = chestLogo
            break
        case 'shoulders' :
            icon = shouldersLogo
            break
        case 'waist' :
            icon = waistLogo
            break
        case 'neck' :
            icon = neckLogo
            break
        case 'cardio' :
            icon = cardioLogo
            break
        default :
            icon = allLogo
    
    }
    return icon
}