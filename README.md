# Where it's @

## Externa bibliotek:

# UUID

Jag har använt mig av UUID för att hålla koll på biljetter och evenemang, superenkelt att använda och smidigt. Den genererar en sträng med random nummer och bokstäver som man kan använda som id.

# Styled Components

För stylingen använde jag mig av styled-components. Man stylar verje component för sig vilket gör att man enbart behöver styla en gång, då stylingen är kopplad till komponenten och återanvänds automatiskt varje gång komponenten renderas.

# React Swipeable

För att navigera runt i appen har jag använt mig av biblioteket react-swipeable. Den lyssnar på användarens swipe-gester, t.ex. om man sveper vänster eller höger på mobilen. Med hjälp av useSwipeable skapar jag ett objekt med händelsehanterare (handlers) för olika swipes. Dessa handlers sätts på ett wrapper-element i layouten så att hela sidan kan reagera på swipes. När en swipe upptäcks kan jag t.ex. navigera till en annan vy eller trigga en animation.
