// Copied version of extension moveSMART.ts

/**
 * Custom blocks
 */
//% weight=100 color=#08415d icon="\uf1ae"
//% groups="['lesson 1', 'lesson 2', 'lesson 3']"
namespace moveSMART {
    //variables

    /**
         * TODO: return acceleration strength in g
         */
    //%block weight=3000
    export function acceleration_strength(): number {
        return (input.acceleration(Dimension.Strength))/1000
    }
}


