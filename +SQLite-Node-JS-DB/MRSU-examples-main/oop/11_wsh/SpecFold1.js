/******************************************************************/
/* ���: SpecFold1.js                                              */
/* ����: JScript                                                  */
/* ��������: ����� �������� ���� ����������� ����� Windows        */
/******************************************************************/
var WshShell, WshFldrs, i, s;  //��������� ����������
//������� ������ WshShell
WshShell = WScript.CreateObject("Wscript.Shell");
//������� ������ WshSpecialFolders
WshFldrs = WshShell.SpecialFolders;
s="������ ���� ����������� �����:\n\n";
//���������� ��� �������� ��������� WshFldrs
for (i=0;i<= WshFldrs.Count()-1;i++){
  //��������� ������ � ������ � ����������� ������
  s+=WshFldrs(i)+"\n";
  }
WScript.Echo(s);
/*************  ����� *********************************************/
