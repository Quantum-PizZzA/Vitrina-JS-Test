/********************************************************************/
/* ���: ListNetworkResources.js                                     */
/* ����: JScript                                                    */
/* ��������: ����� ������������ ������� �������� (����� � ��������) */
/********************************************************************/
var WshNetwork,s,NetwDrives,i,NetwPrinters; //��������� ����������

//������� ������ WshNetwork
WshNetwork = WScript.CreateObject("WScript.Network");

/*****   ����� ������ ���� ������������ ������� ������  ******/
s="������������ ������� �����:\n\n";
//������� ��������� � ������� � ������������ ������
NetwDrives = WshNetwork.EnumNetworkDrives();
i=0;
while (i<=NetwDrives.Count()-2) {  //���������� �������� ���������
  //� ������ �������� ��������� ���������� ����� �����,
  //�� ������ - ������� ��� ������� � �. �.
  s+=NetwDrives(i)+"  "+NetwDrives(i+1)+"\n";
  i=i+2;
  }
WScript.Echo(s);  //������� �������������� ������ �� �����

/******   ����� ������ ���� ������������ ������� ���������  ******/
s="������������ ������� ��������:\n\n";
//������� ��������� � ������� � ������������ ���������
NetwPrinters = WshNetwork.EnumPrinterConnections();
i=0;
while (i<=NetwPrinters.Count()-2) {  //���������� �������� ���������
  //� ������ �������� ��������� ���������� �������� ��������� ������,
  //�� ������ - ������� ��� �������� � �. �.
  s+=NetwPrinters(i)+"  "+NetwPrinters(i+1)+"\n";
  i=i+2;
  }
WScript.Echo(s); //������� �������������� ������ �� �����
/*************  ����� *********************************************/
