USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspGetPatientBySTT]    Script Date: 1/20/2024 3:06:47 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspGetPatientBySTT]
    @STT INT
AS
BEGIN
    IF EXISTS (SELECT 1 FROM BENHNHAN WHERE STT = @STT)
    BEGIN
        -- Nếu tồn tại, thực hiện các công việc khác
        SELECT * FROM BENHNHAN WHERE STT = @STT;
    END
    ELSE
    BEGIN
        SELECT * FROM LICHHEN WHERE STT = @STT;
    END;
END;