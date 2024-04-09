// JavaScript keyboard events
//  When you interact with the keyboard, the keyboard events are fired.
// There are three main keyboard events:

// keydown - fires when you press a key on the keyboard and fires
//repeatedly while you’re holding down the key.

// keyup - fires when you release a key on the keyboard

// keypress - fires when you press a character keyboard like a,b,c, not the
// left arrow key, home, or end keyboard. keypress alo fires repeatedly
// while you hold down the key on the keyboard.

// The keyboard events typically fire on the text box, though all elements
// support them.

/*
When you press a character key once on the keyboard, three keyboard events are fired in the following order:
  keydown
  keypress
  keyup
Both keydown and keypress events are fired before any change is made to the 
text box, whereas the keyup event fires after the changes have been made to 
the text box. If you hold down a character key, the keydown and keypress 
are fired repeatedly until you release the key.

When you press a non-character key, the keydown event is fired first 
followed by the keyup event. If you hold down the non-character key, the 
keydown is fired repeatedly until you release the key.
*/

/*
Handling keyboard events
To handle a keyboard event, you follow these steps:
First, select the element on which the keyboard event will fire. Typically, 
it is a text box.
Then, use the element.addEventListener() to register an event handler.
*/

/*
The keyboard event properties
The keyboard event has two important properties: key and code. 
The key property returns the character that has been pressed whereas the 
code property returns the physical key code.

For example, if you press the z character key, the event.key returns z and event.code returns KeyZ.
*/
