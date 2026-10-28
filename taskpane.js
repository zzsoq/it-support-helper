function showHelp(type) {
  const problems = {
    office: {
      title: "مشاكل Office وExcel",
      steps: "1. أغلقي البرنامج وافتحيه من جديد.\n2. أعيدي تشغيل الجهاز إذا استمرت المشكلة.\n3. جرّبي فتح ملف آخر."
    },
    network: {
      title: "الإنترنت والشبكة",
      steps: "1. تأكدي من اتصال Wi-Fi أو كابل الشبكة.\n2. جرّبي فتح موقع آخر.\n3. إذا كنتِ تستخدمين VPN، تحققي من اتصاله."
    },
    printer: {
      title: "مشاكل الطابعة",
      steps: "1. تأكدي من تشغيل الطابعة.\n2. تحققي من الورق وعدم وجود انحشار.\n3. تأكدي من اختيار الطابعة الصحيحة."
    },
    login: {
      title: "تسجيل الدخول",
      steps: "1. تحققي من اسم المستخدم.\n2. تأكدي من لغة لوحة المفاتيح.\n3. لا تشاركي كلمة المرور مع أي شخص."
    },
    outlook: {
      title: "مشاكل Outlook",
      steps: "1. أغلقي Outlook وافتحيه مجددًا.\n2. تحققي من اتصال الإنترنت.\n3. سجلي رسالة الخطأ إن استمرت المشكلة."
    }
  };

  const problem = problems[type];
  document.getElementById("result").textContent =
    problem.title + "\n\n" + problem.steps +
    "\n\nإذا لم تُحل المشكلة، تواصلي مع فريق IT Support.";
}
