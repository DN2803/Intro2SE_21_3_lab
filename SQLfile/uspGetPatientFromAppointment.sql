USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspGetPatientFromAppointment]    Script Date: 1/20/2024 3:06:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspGetPatientFromAppointment]
    @date VARCHAR(100),
	@doctorUSERNAME CHAR(10)
AS
BEGIN
	DECLARE @dateValue DATE;
	SET @dateValue = CAST(@date AS DATE);
	SELECT *
	FROM LICHHEN
	INNER JOIN BACSI ON LICHHEN.MABACSI = BACSI.MABACSI
	WHERE NGAYKHAM = @dateValue AND USERNAME = @doctorUSERNAME
END;