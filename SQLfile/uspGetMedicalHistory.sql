USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspGetMedicalHistory]    Script Date: 1/21/2024 3:40:38 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspGetMedicalHistory]
    @mabn CHAR(15),
    @ngaydieutri DATE,
	@doctor_username CHAR(10)
AS
BEGIN
	IF EXISTS (SELECT 1 FROM BENHSU WHERE MABN = @mabn AND NGAYDIEUTRI = @ngaydieutri)
	BEGIN
		SELECT HOTEN_BS,TRIEUCHUNG,CHANDOAN FROM BENHSU
		INNER JOIN BACSI ON BENHSU.MABACSI = BACSI.MABACSI
		WHERE BACSI.USERNAME = @doctor_username AND BENHSU.NGAYDIEUTRI = @ngaydieutri AND MABN = @mabn
		PRINT(@ngaydieutri)
	END
ELSE
    BEGIN
        SELECT '' AS HOTEN_BS, '' AS TRIEUCHUNG, '' AS CHANDOAN;
		PRINT(@ngaydieutri)
    END
END;
