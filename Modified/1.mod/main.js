const Player = new NativeClass("Terraria", "Player");
const Main = new NativeClass("Terraria", "Main");

Player.Update.hook((original, self, i) => {
    original(self, i);
    const headSlot = self.armor[10];
    const bodySlot = self.armor[11];
    const legSlot = self.armor[12];

    self.statDefense += (headSlot.defense + bodySlot.defense + legSlot.defense); 
});
