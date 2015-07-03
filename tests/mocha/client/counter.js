if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("カウンターアプリ", function(){
      it("クリックすると、値が２の倍数ずつ増える", function(){
        var first = Session.get('counter')
        $('button').click()
        $('button').click()
        $('button').click()
        $('button').click()
        chai.assert.equal(8,Session.get('counter'));
      });
    });
  });
}
