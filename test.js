function testsource()
{
    return location.hash;
}

function test1() {
    document.cookie = testsource(); //#defect#SA.COOKIE_INJECTION
}

function test6() {
    var req = new XMLHttpRequest("whatever");
    req.setRequestHeader(testsource()); //#defect#SA.HEADER_INJECTION
}
